(function () {
  const data = window.SIGNAGE_DATA || {};
  const slides = Array.from(document.querySelectorAll('.slide'));
  const seconds = Number(data.slideSeconds || 6);
  let current = 0;
  let brandIndex = 0;

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value || '';
  }

  function renderPrices() {
    const grid = document.getElementById('priceGrid');
    if (!grid || !data.prices) return;
    grid.innerHTML = '';
    (data.prices.items || []).forEach((item) => {
      const row = document.createElement('div');
      row.className = 'price-row';
      row.innerHTML = `<span class="price-label"></span><span class="price-value"></span><span class="price-unit"></span>`;
      row.querySelector('.price-label').textContent = item.label;
      row.querySelector('.price-value').textContent = item.value;
      row.querySelector('.price-unit').textContent = item.unit || '円/g';
      grid.appendChild(row);
    });
    setText('priceNote', `${data.prices.updatedAt || ''}｜${data.prices.source || ''}\n${data.prices.disclaimer || ''}`);
  }

  function renderBrands() {
    const brands = data.brands || [];
    setText('brandMain', brands[0] || '買取強化中');
    setText('brandList', brands.slice(1).join('  /  '));
  }

  function rotateBrand() {
    const brands = data.brands || [];
    if (!brands.length) return;
    brandIndex = (brandIndex + 1) % brands.length;
    setText('brandMain', brands[brandIndex]);
    const rest = brands.filter((_, i) => i !== brandIndex).slice(0, 8);
    setText('brandList', rest.join('  /  '));
  }

  function renderSeason() {
    setText('seasonTitle', data.season?.title || '季節のお知らせ');
    const wrap = document.getElementById('seasonKeywords');
    if (!wrap) return;
    wrap.innerHTML = '';
    (data.season?.keywords || []).forEach((word) => {
      const span = document.createElement('span');
      span.className = 'keyword';
      span.textContent = word;
      wrap.appendChild(span);
    });
  }

  function renderOther() {
    setText('closedText', data.closed?.text || '定休日は店舗までご確認ください');
    setText('businessHours', data.closed?.hours || '');
    setText('campaignTitle', data.campaign?.title || '査定無料');
    setText('campaignSub', data.campaign?.sub || 'お気軽にお持ちください');
  }

  function showSlide(index) {
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
    if (slides[index]?.dataset.slide === 'brands') rotateBrand();
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function setupFullscreen() {
    const btn = document.getElementById('fullscreenBtn');
    if (!btn) return;
    btn.addEventListener('click', async () => {
      try {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
          document.body.classList.add('is-fullscreen');
        } else {
          btn.textContent = 'Safariの共有 → ホーム画面に追加 推奨';
        }
      } catch (e) {
        btn.textContent = 'Safariの共有 → ホーム画面に追加 推奨';
      }
    });
    document.addEventListener('fullscreenchange', () => {
      document.body.classList.toggle('is-fullscreen', Boolean(document.fullscreenElement));
    });
  }

  renderPrices();
  renderBrands();
  renderSeason();
  renderOther();
  setupFullscreen();
  showSlide(0);
  setInterval(nextSlide, seconds * 1000);
})();
