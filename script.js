const vendas = [
  { data: '2025-04-13', cliente: 'João Lima', pais: 'Brasil', valor: 320, status: 'Concluído' },
  { data: '2025-04-13', cliente: 'Ana Costa', pais: 'Portugal', valor: 270, status: 'Em Andamento' },
  { data: '2025-04-12', cliente: 'Maria Souza', pais: 'Argentina', valor: 180, status: 'Cancelado' },
  { data: '2025-04-12', cliente: 'Lucas Dias', pais: 'México', valor: 540, status: 'Concluído' },
  { data: '2025-04-11', cliente: 'Pedro Rocha', pais: 'EUA', valor: 760, status: 'Concluído' },
  { data: '2025-04-10', cliente: 'Fernanda Luz', pais: 'Alemanha', valor: 450, status: 'Em Andamento' },
  { data: '2025-04-09', cliente: 'Carlos Melo', pais: 'Japão', valor: 310, status: 'Reembolso' },
];

function atualizarTabela(dadosFiltrados) {
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';
  dadosFiltrados.forEach(v => {
    const tr = document.createElement('tr');
    tr.innerHTML = ` 
      <td>${v.data}</td>
      <td>${v.cliente}</td>
      <td>${v.pais}</td>
      <td>R$ ${v.valor}</td>
      <td>${v.status}</td>
    `;
    tbody.appendChild(tr);
  });
}

document.getElementById('filterBtn').addEventListener('click', () => {
  const start = document.getElementById('startDate').value;
  const end = document.getElementById('endDate').value;
  if (!start || !end) return alert('Por favor, selecione ambas as datas.');

  const dadosFiltrados = vendas.filter(v => v.data >= start && v.data <= end);
  atualizarTabela(dadosFiltrados);
});

atualizarTabela(vendas);

document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Gráficos com Chart.js
new Chart(document.getElementById('barChart'), {
  type: 'bar',
  data: {
    labels: ['Brasil', 'Portugal', 'Argentina', 'México', 'EUA', 'Alemanha', 'Japão'],
    datasets: [{
      label: 'Vendas',
      data: [320, 270, 180, 540, 760, 450, 310],
      backgroundColor: '#5a67d8'
    }]
  }
});

new Chart(document.getElementById('doughnutChart'), {
  type: 'doughnut',
  data: {
    labels: ['Concluído', 'Em Andamento', 'Cancelado', 'Reembolso'],
    datasets: [{
      data: [3, 2, 1, 1],
      backgroundColor: ['#48bb78', '#ecc94b', '#f56565', '#63b3ed']
    }]
  }
});

new Chart(document.getElementById('lineChart'), {
  type: 'line',
  data: {
    labels: ['Moda', 'Eletrônicos', 'Casa', 'Esportes'],
    datasets: [{
      label: 'Lucro R$',
      data: [4200, 6000, 3500, 4800],
      backgroundColor: '#38b2ac',
      borderColor: '#38b2ac',
      fill: false,
      tension: 0.4
    }]
  }
});

new Chart(document.getElementById('radarChart'), {
  type: 'radar',
  data: {
    labels: ['Equipe A', 'Equipe B', 'Equipe C', 'Equipe D'],
    datasets: [{
      label: 'Performance',
      data: [65, 59, 90, 81],
      backgroundColor: 'rgba(90, 103, 216, 0.2)',
      borderColor: '#5a67d8'
    }]
  }
});
