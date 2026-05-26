const players = [
  { name: "網球愛好者 1號 (單打)", location: "台北市大安運動中心" },
  { name: "網球愛好者 2號 (雙打)", location: "高雄" },
  { name: "網球愛好者 3號 (單打)", location: "台北市大安運動中心" },
  { name: "網球愛好者 4號 (雙打)", location: "台北市大安運動中心" }
];

function renderPlayers(list) {
  const container = document.getElementById("playerList");
  container.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>地址: ${p.location}</p>
      <button onclick="applyMatch('${p.name}')">應徵媒合</button>
    `;
    container.appendChild(card);
  });
}

function searchPlayers() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const filtered = players.filter(p =>
    p.name.toLowerCase().includes(keyword) ||
    p.location.toLowerCase().includes(keyword)
  );
  renderPlayers(filtered);
}

function clearFilter() {
  document.getElementById("searchInput").value = "";
  renderPlayers(players);
}

function applyMatch(name) {
  alert("你已應徵 " + name + " 的媒合！");
}

// 初始化顯示
renderPlayers(players);

// 綁定輸入事件
document.getElementById("searchInput").addEventListener("input", searchPlayers);
