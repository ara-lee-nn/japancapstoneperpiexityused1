const atmData = {
  seven: {
    title: "세븐뱅크 ATM",
    image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/74035e62-c41e-5741-afc5-4522120efc03/0ed5ba6e-44c3-50e2-bc98-3d99d8d4515b.jpg",
    imageAlt: "일본 7-Eleven 매장 내 세븐뱅크 ATM",
    note: "핵심: ‘지금 환전하지 않고 진행’ 선택",
    steps: [
      ["카드 삽입", "해외발급 카드를 삽입하고 사용 언어를 선택합니다."],
      ["인출 선택", "‘인출(Withdrawal)’ 버튼을 선택합니다."],
      ["계좌 선택", "‘보통예금’ 또는 ‘건너뛰기’를 선택합니다."],
      ["환전 선택", "‘지금 환전하지 않고 진행’을 선택합니다."],
      ["비밀번호 입력", "카드 비밀번호가 4자리라면 뒤에 00을 붙여 입력할 수 있습니다."],
      ["금액·통화 선택", "출금 금액을 고르고, 가능하면 JPY(엔화) 결제를 선택합니다."]
    ],
    warning: "세븐뱅크는 1회 인출 한도가 카드 종류에 따라 다를 수 있습니다. 출금이 되지 않으면 금액을 낮춰 재시도하세요."
  },
  aeon: {
    title: "이온(AEON) ATM",
    image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/07e651a1-afee-5e25-9929-47d20b5dcbe9/70f714a0-51f6-5b82-9dff-89ff62880d33.jpg",
    imageAlt: "일본 공항 내 이온은행 ATM",
    note: "핵심: 언어 변경 전 International Card 선택",
    steps: [
      ["International Card 선택", "언어를 바꾸기 전에 화면 좌측 하단의 International Card를 먼저 선택합니다."],
      ["언어 선택", "한국어 또는 영어 등 사용 가능한 언어를 선택합니다."],
      ["인출 선택", "‘출금(Withdrawal)’을 선택합니다."],
      ["계좌 선택", "‘보통예금’ 계좌를 선택합니다."],
      ["비밀번호 입력", "4자리 비밀번호를 요구하는 경우 00을 붙여 입력할 수 있습니다."],
      ["금액 확인", "출금 금액을 선택하고 안내에 따라 마무리합니다."]
    ],
    warning: "이온 ATM은 1회 인출 한도가 5만 엔입니다. 카드사에 따라 별도 수수료가 발생할 수 있습니다."
  },
  lawson: {
    title: "로손(Lawson) ATM",
    image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/c96c07bd-872f-5b4b-9eb1-0c683c5b8099/ce478ef9-e380-5344-89bb-6f87e615015a.jpg",
    imageAlt: "일본 로손은행 ATM",
    note: "핵심: 첫 화면의 초록색 버튼 선택",
    steps: [
      ["해외카드 버튼 선택", "첫 화면에 보이는 초록색 버튼을 선택합니다."],
      ["언어 선택", "필요한 언어를 선택합니다."],
      ["인출 선택", "‘출금(Withdrawal)’을 선택합니다."],
      ["계좌 선택", "‘보통예금’ 계좌를 선택합니다."],
      ["비밀번호 입력", "카드 비밀번호를 입력합니다."],
      ["금액 선택", "1만 엔 단위로 출금 금액을 선택합니다."]
    ],
    warning: "로손 ATM의 1회 인출 한도는 5만 엔이며, 인출 단위는 1만 엔입니다. ATM에 국제카드 이용 가능 표시가 있는지 먼저 확인하세요."
  }
};

const troubleData = {
  pin: { title:"비밀번호 오류", actions:[
    "카드 비밀번호가 4자리인 경우, 뒤에 00을 붙여 6자리로 입력해 보세요.",
    "숫자 입력 후 반드시 확인(Enter) 버튼을 눌렀는지 확인하세요.",
    "여러 번 실패하면 카드가 잠길 수 있으므로 재시도를 멈추세요.",
    "카드사 앱 또는 고객센터에서 해외 ATM 인출 설정과 비밀번호를 확인하세요."
  ]},
  intl: { title:"국제카드 메뉴를 찾지 못함", actions:[
    "이온 ATM이라면 언어 변경 전에 International Card를 먼저 선택하세요.",
    "ATM에 Visa, Mastercard, JCB, UnionPay 등 국제카드 표시가 있는지 확인하세요.",
    "첫 화면에서 ‘해외발급 카드’ 또는 ‘International Card’ 버튼을 찾아보세요.",
    "그래도 없다면 다른 ATM으로 이동하세요. 세븐뱅크 또는 로손 ATM을 우선 확인해 보세요."
  ]},
  exchange: { title:"환전 옵션이 표시됨", actions:[
    "세븐뱅크 ATM에서는 ‘지금 환전하지 않고 진행’을 선택하세요.",
    "결제 통화를 고를 수 있다면 가능하면 JPY(엔화)를 선택하세요.",
    "원화(KRW) 결제를 선택하면 불리한 환율이나 추가 비용이 발생할 수 있습니다.",
    "확실하지 않으면 취소 후 YENMATE의 해당 ATM 가이드를 다시 확인하세요."
  ]},
  limit: { title:"출금 한도 초과", actions:[
    "출금 금액을 낮춰서 다시 시도하세요.",
    "로손·이온·우체국은행 ATM은 1회 5만 엔 한도인 경우가 많습니다.",
    "로손 ATM은 1만 엔 단위로 출금해야 합니다.",
    "카드사 자체 해외 인출 한도도 별도로 적용될 수 있으니 카드사 앱을 확인하세요."
  ]},
  card: { title:"카드가 인식되지 않음", actions:[
    "카드를 삽입하는 방향을 확인하고 다시 넣어 보세요.",
    "카드에 해외 결제 또는 해외 ATM 인출 기능이 활성화되어 있는지 확인하세요.",
    "ATM에 국제카드 결제 네트워크 표시가 있는지 확인하세요.",
    "다른 은행 ATM에서 재시도하고, 그래도 실패하면 카드사에 문의하세요."
  ]}
};

const atmContent=document.getElementById("atm-content");
const tabs=document.querySelectorAll(".tab");

function renderAtm(key){
  const d=atmData[key];
  atmContent.innerHTML=`
    <figure class="guide-figure">
      <img src="${d.image}" alt="${d.imageAlt}" loading="lazy" />
      <figcaption>${d.imageAlt}</figcaption>
    </figure>
    <h3 class="guide-title">${d.title}</h3>
    <span class="guide-note">${d.note}</span>
    <div class="steps">
      ${d.steps.map((s,i)=>`<div class="step"><div class="step-num">${i+1}</div><div><strong>${s[0]}</strong><span>${s[1]}</span></div></div>`).join("")}
    </div>
    <div class="warning"><strong>주의:</strong> ${d.warning}</div>`;
}

tabs.forEach(tab=>tab.addEventListener("click",()=>{
  tabs.forEach(t=>t.classList.remove("active"));
  tab.classList.add("active");
  renderAtm(tab.dataset.atm);
}));
renderAtm("seven");

const troubleResult=document.getElementById("trouble-result");
const troubleBtns=document.querySelectorAll(".trouble-btn");

function renderTrouble(key){
  const d=troubleData[key];
  troubleResult.innerHTML=`<h3>${d.title}</h3><ul>${d.actions.map(a=>`<li>${a}</li>`).join("")}</ul>`;
}

troubleBtns.forEach(btn=>btn.addEventListener("click",()=>{
  troubleBtns.forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  renderTrouble(btn.dataset.issue);
}));
renderTrouble("pin");

const boxes=document.querySelectorAll("#checklist input");
const fill=document.getElementById("progress-fill");
const text=document.getElementById("progress-text");

boxes.forEach(box=>box.addEventListener("change",()=>{
  const done=[...boxes].filter(c=>c.checked).length;
  fill.style.width=`${(done/boxes.length)*100}%`;
  text.textContent=`${done} / ${boxes.length} 완료`;
}));
