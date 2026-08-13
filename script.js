document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.inventory-form');
  const tableBody = document.querySelector('.inventory-table tbody');

  if (form && tableBody) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const itemName = document.getElementById('item-name').value.trim();
      const sku = document.getElementById('sku').value.trim();
      const categorySelect = document.getElementById('category');
      const categoryText = categorySelect.options[categorySelect.selectedIndex].text;
      const quantity = parseInt(document.getElementById('quantity').value, 10) || 0;

      let statusClass = 'status-in-stock';
      let statusText = 'In Stock';

      if (quantity === 0) {
        statusClass = 'status-out-of-stock';
        statusText = 'Out of Stock';
      } else if (quantity <= 5) {
        statusClass = 'status-low-stock';
        statusText = 'Low Stock';
      }

      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${escapeHtml(itemName)}</td>
        <td>${escapeHtml(sku)}</td>
        <td>${escapeHtml(categoryText)}</td>
        <td>${quantity}</td>
        <td><span class="status-badge ${statusClass}">${statusText}</span></td>
        <td class="actions-cell">
          <button type="button" class="btn btn-edit">Edit</button>
          <button type="button" class="btn btn-delete">Delete</button>
        </td>
      `;

      tableBody.appendChild(newRow);
      form.reset();
      updateSummaryCounts();
    });
  }

  if (tableBody) {
    tableBody.addEventListener('click', (e) => {
      if (e.target && e.target.classList.contains('btn-delete')) {
        const row = e.target.closest('tr');
        if (row) {
          row.remove();
          updateSummaryCounts();
        }
      }
    });
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function updateSummaryCounts() {
    const rows = tableBody.querySelectorAll('tr');
    let totalItems = 0;
    let lowStockCount = 0;
    let outOfStockCount = 0;
    const categories = new Set();

    rows.forEach((row) => {
      const cells = row.querySelectorAll('td');
      if (cells.length >= 5) {
        const category = cells[2].textContent.trim();
        const qty = parseInt(cells[3].textContent.trim(), 10) || 0;

        totalItems += qty;
        if (category) categories.add(category);

        if (qty === 0) {
          outOfStockCount++;
        } else if (qty <= 5) {
          lowStockCount++;
        }
      }
    });

    const totalItemsEl = document.querySelector('.summary-card:nth-child(1) .summary-count');
    const lowStockEl = document.querySelector('.summary-card:nth-child(2) .summary-count');
    const outOfStockEl = document.querySelector('.summary-card:nth-child(3) .summary-count');
    const categoriesEl = document.querySelector('.summary-card:nth-child(4) .summary-count');

    if (totalItemsEl) totalItemsEl.textContent = totalItems;
    if (lowStockEl) lowStockEl.textContent = lowStockCount;
    if (outOfStockEl) outOfStockEl.textContent = outOfStockCount;
    if (categoriesEl) categoriesEl.textContent = categories.size;
  }
});
