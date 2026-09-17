// mrj4-troubleshooter AI 자연어 질문 기능
// app.js를 건드리지 않고, app.js가 그리는 DOM(#detailBody, #emptyState)을
// 관찰해서 "매뉴얼 근거 기반 AI 질문" UI를 주입/연결하는 독립 스크립트입니다.
(function () {
  'use strict';

  const AI_API_URL = 'https://mrj4-troubleshooter-api.parkho86.workers.dev/ask';

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function aiBlockHtml(idPrefix, online, opts) {
    opts = opts || {};
    if (!online) {
      return `
        <div class="ai-ask-block disabled">
          <p style="font-size:12.5px;color:var(--text-dim);margin:0;">오프라인 상태에서는 AI 질문을 사용할 수 없습니다. 인터넷 연결 후 다시 시도해 주세요.</p>
        </div>`;
    }
    const placeholder = opts.placeholder || '예: 이 알람 원인을 좀 더 쉽게 설명해줘';
    const initial = opts.initialQuestion || '';
    return `
      <div class="ai-ask-block">
        <div class="ai-ask-row">
          <textarea id="${idPrefix}Input" class="ai-question-input" rows="1" placeholder="${escapeHtml(placeholder)}">${escapeHtml(initial)}</textarea>
          <button id="${idPrefix}Btn" class="ai-ask-btn" type="button">질문하기</button>
        </div>
        <div id="${idPrefix}Answer" class="ai-answer-area hidden"></div>
        <div class="ai-hint">매뉴얼 데이터를 근거로 AI가 답변합니다. 응답에 몇 초 정도 걸릴 수 있어요.</div>
      </div>`;
  }

  function wireAiBlock(idPrefix, contextLabel) {
    const input = document.getElementById(idPrefix + 'Input');
    const btn = document.getElementById(idPrefix + 'Btn');
    const answerArea = document.getElementById(idPrefix + 'Answer');
    if (!input || !btn || !answerArea) return;

    const ask = async () => {
      const question = input.value.trim();
      if (!question) { input.focus(); return; }
      const originalLabel = btn.textContent;
      btn.disabled = true;
      btn.textContent = '답변 생성 중…';
      answerArea.classList.remove('hidden');
      answerArea.innerHTML = '<p class="ai-loading">매뉴얼 데이터를 바탕으로 답변을 생성하고 있습니다…</p>';
      try {
        const fullQuestion = contextLabel ? `[현재 보고 있는 항목: ${contextLabel}]\n${question}` : question;
        const resp = await fetch(AI_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question: fullQuestion })
        });
        let data = null;
        try { data = await resp.json(); } catch (e) {}
        if (!resp.ok || !data || data.error) {
          answerArea.innerHTML = `<p class="ai-error">${escapeHtml((data && data.error) || 'AI 응답을 가져오지 못했습니다. 잠시 후 다시 시도해 주세요.')}</p>`;
        } else {
          answerArea.innerHTML = `<div class="ai-answer">${renderAiAnswer(data.answer || '')}</div>`;
        }
      } catch (e) {
        answerArea.innerHTML = '<p class="ai-error">네트워크 오류로 AI 응답을 가져오지 못했습니다. 연결 상태를 확인해 주세요.</p>';
      } finally {
        btn.disabled = false;
        btn.textContent = originalLabel;
      }
    };

    btn.addEventListener('click', ask);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); ask(); }
    });
  }

  // 아주 가벼운 마크다운 → HTML 렌더러 (헤더 / 굵게 / 목록 / 표 / 문단만 지원, 항상 escape 후 처리)
  function renderAiAnswer(raw) {
    const lines = String(raw).replace(/\r\n/g, '\n').split('\n');
    const inline = (s) => escapeHtml(s)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/`(.+?)`/g, '<code>$1</code>');

    let html = '';
    let inList = false;
    const closeList = () => { if (inList) { html += '</ul>'; inList = false; } };

    let i = 0;
    while (i < lines.length) {
      const trimmed = lines[i].trim();

      if (!trimmed) { closeList(); i++; continue; }

      const h = trimmed.match(/^(#{1,4})\s+(.*)$/);
      if (h) { closeList(); html += `<h4>${inline(h[2])}</h4>`; i++; continue; }

      if (/^\|.*\|$/.test(trimmed)) {
        const tableLines = [];
        while (i < lines.length && /^\|.*\|$/.test(lines[i].trim())) {
          tableLines.push(lines[i].trim());
          i++;
        }
        if (tableLines.length >= 2 && /^\|[\s:|-]+\|$/.test(tableLines[1])) {
          const rows = tableLines.filter((_, idx) => idx !== 1).map(r => r.slice(1, -1).split('|').map(c => c.trim()));
          const [head, ...body] = rows;
          html += '<table class="ai-table"><thead><tr>' +
            head.map(c => `<th>${inline(c)}</th>`).join('') + '</tr></thead><tbody>' +
            body.map(r => `<tr>${r.map(c => `<td>${inline(c)}</td>`).join('')}</tr>`).join('') +
            '</tbody></table>';
        } else {
          tableLines.forEach(l => { html += `<p>${inline(l)}</p>`; });
        }
        continue;
      }

      const li = trimmed.match(/^[-*]\s+(.*)$/);
      if (li) {
        if (!inList) { html += '<ul>'; inList = true; }
        html += `<li>${inline(li[1])}</li>`;
        i++; continue;
      }

      closeList();
      html += `<p>${inline(trimmed)}</p>`;
      i++;
    }
    closeList();
    return html;
  }

  function isOnline() {
    return navigator.onLine !== false;
  }

  // --- 상세 화면(#detailBody)의 기존 "매뉴얼 근거 기반 AI 질문" 플레이스홀더를 실제 UI로 교체 ---
  function upgradeDetailAiBlock() {
    const detailBody = document.getElementById('detailBody');
    if (!detailBody) return;

    const labelNodes = detailBody.querySelectorAll('.detail-block-label');
    let targetBlock = null;
    labelNodes.forEach(node => {
      if (node.textContent.trim() === '매뉴얼 근거 기반 AI 질문') {
        targetBlock = node.closest('.detail-block');
      }
    });
    if (!targetBlock) return;
    if (targetBlock.dataset.aiUpgraded === '1') return;

    const online = isOnline();
    const codeEl = detailBody.querySelector('.detail-code');
    const titleEl = detailBody.querySelector('.detail-title');
    const contextLabel = [codeEl && codeEl.textContent.trim(), titleEl && titleEl.textContent.trim()]
      .filter(Boolean).join(' - ');

    targetBlock.dataset.aiUpgraded = '1';
    targetBlock.innerHTML = `
      <div class="detail-block-label">매뉴얼 근거 기반 AI 질문</div>
      ${aiBlockHtml('detailAi', online, { placeholder: '예: 이 알람 원인을 좀 더 쉽게 설명해줘' })}
    `;
    wireAiBlock('detailAi', contextLabel);
  }

  // --- 검색 결과 없음(#emptyState) 화면에 자연어 AI 질문 보조 섹션 추가 ---
  function ensureEmptyAiSection() {
    const emptyState = document.getElementById('emptyState');
    if (!emptyState) return null;
    let section = document.getElementById('emptyAiSection');
    if (!section) {
      section = document.createElement('div');
      section.id = 'emptyAiSection';
      section.className = 'empty-ai-section hidden';
      section.innerHTML = '<div class="empty-ai-label">AI에게 자연어로 물어보기</div><div id="emptyAiBlockHolder"></div>';
      emptyState.appendChild(section);
    }
    return section;
  }

  function refreshEmptyAiSection() {
    const emptyState = document.getElementById('emptyState');
    const searchInput = document.getElementById('searchInput');
    if (!emptyState) return;

    const section = ensureEmptyAiSection();
    const holder = document.getElementById('emptyAiBlockHolder');
    if (!section || !holder) return;

    const visible = !emptyState.classList.contains('hidden');
    if (!visible) {
      section.classList.add('hidden');
      return;
    }

    const online = isOnline();
    if (section.classList.contains('hidden') || section.dataset.online !== String(online)) {
      section.dataset.online = String(online);
      holder.innerHTML = aiBlockHtml('searchAi', online, {
        placeholder: '예: 서보모터가 진동하는데 원인이 뭘까?',
        initialQuestion: (searchInput && searchInput.value) || ''
      });
      wireAiBlock('searchAi', null);
    }
    section.classList.remove('hidden');
  }

  function init() {
    const detailBody = document.getElementById('detailBody');
    const emptyState = document.getElementById('emptyState');

    if (detailBody) {
      const detailObserver = new MutationObserver(() => upgradeDetailAiBlock());
      detailObserver.observe(detailBody, { childList: true, subtree: true });
      upgradeDetailAiBlock();
    }

    if (emptyState) {
      ensureEmptyAiSection();
      const emptyObserver = new MutationObserver(() => refreshEmptyAiSection());
      emptyObserver.observe(emptyState, { attributes: true, attributeFilter: ['class'] });
      refreshEmptyAiSection();
    }

    window.addEventListener('online', () => { refreshEmptyAiSection(); upgradeDetailAiBlock(); });
    window.addEventListener('offline', () => { refreshEmptyAiSection(); upgradeDetailAiBlock(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
