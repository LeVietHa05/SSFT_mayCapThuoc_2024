
// initial variables
var cateList = [];
var currentPill
var cart = [];
var checkOut = []

var step = 'step1';
var stepHistory = [];
var stepHistoryIndex = 0;
let step7_checkout_total = document.getElementById('step7_checkout_total')
let step7_payment_paymentMethod = document.getElementById('step7_payment_paymentMethod')
let step7_payment_qr_container = document.getElementById('step7_payment_qr_container')
let step7_payment_qr = document.getElementById('step7_payment_qr')
let step7_done = document.getElementById('step7_done')

function changeStep(newStep, back = false) {
    if (!back) {
        stepHistory.push(step);
        stepHistoryIndex++;
    } else {
        stepHistoryIndex--;
    }
    step = newStep;
    renderControl();
    insertTopNav3Item();
}

function renderControl() {
    let step1 = document.getElementById('step1');
    let step2 = document.getElementById('step2');
    let step3_danhMuc = document.getElementById('step3_danhMuc');
    let step4_CateDetail = document.getElementById('step4_CateDetail');
    let step5_PillDetail = document.getElementById('step5_PillDetail');
    let step6_cart = document.getElementById('step6_cart')
    let step7_payment = document.getElementById('step7_payment')
    let allStep = document.querySelectorAll('section[id^="step"]');

    let chat = document.getElementById('chat');

    function deSelectAll() {
        chat.classList.add('deSelected');
        allStep.forEach((stepScreen) => {
            stepScreen.classList.add('deSelected', "flex-1", "display-flex-column");
        });
    }

    if (step != 'step7_payment') {
        step7_payment_paymentMethod.style = 'display: flex!important';
        step7_payment_qr_container.style = 'display: none!important';
        step7_done.innerHTML = "Thanh toán";
        step7_done.removeEventListener('click', function () {
            changeStep('step1');
        })
    }

    function selectStep(stepScreen) {
        deSelectAll();
        stepScreen.classList.remove('deSelected');
    }
    switch (step) {
        case 'step1':
            selectStep(step1);
            break;
        case 'step2':
            selectStep(step2);
            break;
        case 'step3_danhMuc':
            selectStep(step3_danhMuc);
            break;
        case 'step4_CateDetail':
            selectStep(step4_CateDetail);
            break;
        case 'step5_PillDetail':
            selectStep(step5_PillDetail);
            break;
        case 'step6_cart':
            selectStep(step6_cart)
            renderCart()
            break;
        case 'step7_payment':
            selectStep(step7_payment)
            renderPayment()
            break;
        case 'chat': {
            selectStep(chat);
            break;
        }
        default:
            break;
    }
}
renderControl();

function pillQuantityControl(pill, quantity, quantityDisplayId, makeItCheckOut = false) {
    console.log(quantity);
    let cartPill = cart.find((cartPill) => cartPill.pill.pill_name === pill.pill_name);
    let quantityDisplay = document.getElementById(quantityDisplayId);

    if (cartPill) {
        if (cartPill.quantity + quantity > pill.pill_quantity) {
            alert('Out of stock');
        } else {
            cartPill.quantity += quantity;
            if (cartPill.quantity <= 0) {
                cart = cart.filter((cartPill) => cartPill.pill.pill_name !== pill.pill_name);
            }
            // Update the quantity display
            if (quantityDisplay) {
                quantityDisplay.textContent = cartPill.quantity;
            }
        }
    } else if (quantity >= 1) {
        if (quantity > pill.pill_quantity) {
            alert('Out of stock');
        } else {
            cart.push({ pill: pill, quantity: quantity });
            if (quantityDisplay) {
                quantityDisplay.textContent = quantity;
            }
        }
    }
    if (makeItCheckOut) {
        cart.forEach((e, i) => {
            checkOut[i] = e
        })
        console.log(checkOut)
    }
    console.log('cart:', cart);
}

// render component
function renderPillCate() {
    pillList.forEach((pill) => {
        pill.pill_tags.forEach((tag) => {
            let cate = cateList.find((c) => c.tag === tag);
            if (!cate) {
                cate = { tag: tag, pills: [] };
                cateList.push(cate);
            }
            cate.pills.push(pill);
        });
    });
    console.log(cateList);


    // TODO: need cate data
    // TODO: change var
    async function renderPillCateList() {
        let pillCateList = document.getElementById('pillCateList');
        let pillCateHtml = '';
        await Promise.all(cateList.map(async (cate) => {
            pillCateHtml += `
            <div 
            data-step="${cate.tag}"
            class="btn btn-hover-tranform display-flex-column-evenly bg-blue-30 border-rad-1"
            style="width: 16rem; height: 16rem; border: 0.25rem solid var(--blue-50)">
                    <div style="width: 50%; height: 50%">
                        <img src="${cate.pills[0] && cate.pills[0].pill_imgAddress && cate.pills[0].pill_imgAddress[0] ? cate.pills[0].pill_imgAddress[0] : 'https://img.freepik.com/free-psd/3d-pills-drug-isolated-transparent-background_191095-16611.jpg'}" alt="" style="width: 100%; height: 100%" />
                    </div>
                    <div class="display-flex-column-center">
                        <h2 class="2lineClip text-center" style="font-size: 1.5rem; color: var(--blue-100)">
                            ${cate.tag ? cate.tag : 'Chưa có danh mục'}
                        </h2>
                        <p class="text-thin text-lineHeight-1p5" style="font-size: 1.25rem; color: var(--blue-80)">
                            (${cate.pills.length} sản phẩm)
                        </p>
                    </div>
                </div>
            `;
        }));
        pillCateList.innerHTML = pillCateHtml;
        document.querySelectorAll('[data-step]').forEach(element => {
            element.addEventListener('click', function () {
                let cate = cateList.find((c) => c.tag === this.getAttribute('data-step'));
                document.querySelector('#step4_CateDetail .topNav3Item').setAttribute('value', cate.tag);
                console.log('click', this.getAttribute('data-step'));
                changeStep('step4_CateDetail');
                renderPills()
            });
        });
    }


    renderPillCateList().catch(error => {
        console.error('Error rendering pill categories:', error);
    });
}
renderPillCate()

function renderPills() {
    let currentTag = document.querySelector('#step4_CateDetail .topNav3Item').getAttribute('value');
    let pills = []
    if (currentTag) {
        let cate = cateList.find((c) => c.tag === currentTag);
        pills = cate.pills;
    }

    async function renderPillList() {
        let pillCateList = document.getElementById('pillList');
        pillCateList.innerHTML = '';
        let pillCateHtml = '';
        await Promise.all(pills.map(async (pill) => {
            pillCateHtml += `
            <div data-step="${pill.pill_name}"
            class="btn display-flex-column-evenly border-rad-1 padding-1 bg-white"
            style="width: 18rem; height: 18rem; border: 1px solid var(--gray-30); gap:0.5rem">
                    <div style="width: 80%; height: 60%">
                        <img src="${pill.pill_imgAddress && pill.pill_imgAddress[0] ? pill.pill_imgAddress[0] : 'https://img.freepik.com/free-psd/3d-pills-drug-isolated-transparent-background_191095-16611.jpg'}" alt="" style="width: 100%; height: 100%" />
                    </div>
                    <div class="display-flex-column-between flex-1" style="align-items:start">
                        <h3 class="text-2lineClip" style="font-size: 1rem; color: var(--blue-100)">
                            ${pill.pill_name ? pill.pill_name : 'Chưa có tên'}
                        </h3>
                        <p class="text-bold" style="font-size: 1.25rem; color: var(--red-100)">
                           đ ${pill.pill_sellPrice ? pill.pill_sellPrice : 'Chưa có giá'}/vỉ
                        </p>
                        <div class="display-flex-between width-100">
                            <p class="text-thin" style="font-size: 1rem; color: var(--gray-30)">#${pill.pill_id}</p>
                            <div class="pill_add_to_cart"> <img src='/icons/cart.svg' alt='cart'/> </div></div>
                        </div>
                    </div>
                </div>
            `;
        }));
        pillCateList.innerHTML = pillCateHtml;
        document.querySelectorAll('[data-step]').forEach(element => {
            element.addEventListener('click', function () {
                let pill = pills.find((p) => p.pill_name === this.getAttribute('data-step'));
                console.log('click', this.getAttribute('data-step'));
                currentPill = pill;
                renderPillDetails();
                changeStep('step5_PillDetail');
            });
            let addToCartBtn = element.querySelector('.pill_add_to_cart');
            if (addToCartBtn) {
                addToCartBtn.addEventListener('click', function () {
                    pillQuantityControl(pills.find((p) => p.pill_name === element.getAttribute('data-step')), 1, 'step5_PillDetail_quantity');
                    console.log('cart:', cart);
                });
            }
        });
    }


    renderPillList().catch(error => {
        console.error('Error rendering pill categories:', error);
    });
}

function renderPillDetails() {
    let container = document.getElementById('step5_pill_info');
    let pill = currentPill;
    let destnationClasses = [
        "pill_ingredient",
        "pill_use",
        "pill_description",
        "pill_indication",
        "pill_contraindication",
        "pill_dosage",
        "pill_pharmacology",
        "pill_pharmacokinetice",
        "pill_sideEffects",
        "pill_interactions",
        "pill_precautions",
        "pill_overdose",
        "pill_overdose_handling",
    ]
    destnationClasses.forEach((destnationClass) => {
        let element = container.querySelector(`.${destnationClass} > p`);
        if (element) {
            element.innerHTML = '';
            insertListGen(pill[destnationClass] && pill[destnationClass][0] ? pill[destnationClass] : 'Chưa có thông tin', element);
        }
    });
    let img = document.querySelector('#step5_pill_img img');
    if (img) {
        img.src = pill.pill_imgAddress[0]
    }
    let name = document.querySelector('#step5_pill_name');
    if (name) {
        name.innerHTML = pill.pill_name;
    }

    let pillQuantity = cart.find((cartPill) => cartPill.pill.pill_name === pill.pill_name);
    let quantityDisplay = document.getElementById('step5_PillDetail_quantity');
    if (quantityDisplay) {
        quantityDisplay.textContent = pillQuantity ? pillQuantity.quantity : 0;
    }
}

function renderCart() {
    let container = document.getElementById('step6_cart_pillList')
    let step6_cart_total = document.getElementById('step6_cart_total');
    if (checkOut.length === 0) {
        step6_cart_total.innerHTML = 0;
    } else {
        step6_cart_total.innerHTML = total;
    }

    if (cart.length > 0) {
        let pillListHtml = ``;
        cart.map((pillInfo) => {
            let pillItem = `
               <div class="step6_cart_pillList_item display-flex-center" pill_id=${pillInfo.pill.pill_id} pill_name=${pillInfo.pill.pill_name} pill_sell=${pillInfo.pill_sellPrice} pill_img=${pillInfo.pill.pill_imgAddress} pill_quantity=${pillInfo.pill.pillQuantity}>
                    <input type="checkbox" id="step6_cart_pillList_item_checkbox" onchange="handleCartCheckBox(this)">
                    <div class="display-flex-between">
                        <img src="${pillInfo.pill.pill_imgAddress}" alt="" srcset="">
                        <div class="display-flex-column-between " style="align-items:start">
                            <p class="text-1lineClip" style="font-size: 1.5rem;">${pillInfo.pill.pill_name}</p>
                            <div class="display-flex-between">
                                <p style="font-size: 1.5rem; color:var(--red-100); font-weight: bold;">đ ${pillInfo.pill.pill_sellPrice}/vỉ</p>
                                <div class="display-flex-center gap-2 border-1 border-rad-2" style="font-size: 1.5rem">
                                    <div class="btn padding-1 padding-v-2" id="step5_PillDetail_minus" onclick="pillQuantityControl(currentPill, -1, 'step6_cart_pillList_quantity'); updateCheckout(${pillInfo.pill.pill_id})">-</div>
                                    <p id="step6_cart_pillList_quantity">${pillInfo.quantity}</p>
                                    <div class="btn padding-1 padding-v-2" id="step5_PillDetail_plus" onclick="pillQuantityControl(currentPill, 1, 'step6_cart_pillList_quantity'); updateCheckout(${pillInfo.pill.pill_id})">+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
            pillListHtml += pillItem;
        })
        container.innerHTML = pillListHtml;
    } else {
        container.innerHTML = `<p class="text-center text-bold">Chưa có sản phẩm nào trong giỏ hàng</p>`
    }
}

function handleCartCheckBox(params) {
    let pill_id = params.parentElement.getAttribute('pill_id');
    let cartItem = cart.find((item) => item.pill.pill_id === pill_id);
    let checkBoxForAll = document.getElementById('step6_cart_checkAll');
    let step6_cart_total = document.getElementById('step6_cart_total');
    if (params.checked) {
        if (!checkOut.some(item => item.pill.pill_name === cartItem.pill.pill_name)) {
            checkOut.push(cartItem);
        }
    } else {
        checkOut = checkOut.filter(item => item.pill.pill_name !== cartItem.pill.pill_name);
        checkBoxForAll.checked = false;
    }

    if (checkOut.length === cart.length) {
        checkBoxForAll.checked = true;
    } else {
        checkBoxForAll.checked = false;
    }

    let total = checkOut.reduce((sum, item) => {
        if (item.pill && item.pill.pill_sellPrice) {
            return sum + item.pill.pill_sellPrice * item.quantity;
        }
        return sum;
    }, 0);
    step6_cart_total.innerHTML = total;
    handleCheckoutBtn()
}

function handleCartCheckAll(params) {
    let checkBoxes = document.querySelectorAll('#step6_cart_pillList_item_checkbox');
    if (params.checked) {
        checkBoxes.forEach((checkBox) => {
            checkBox.checked = true;
        });
        checkOut = cart;
    } else {
        checkBoxes.forEach((checkBox) => {
            checkBox.checked = false;
        });
        checkOut = [];
    }
    let step6_cart_total = document.getElementById('step6_cart_total');
    let total = checkOut.reduce((sum, item) => {
        if (item.pill && item.pill.pill_sellPrice) {
            return sum + item.pill.pill_sellPrice * item.quantity;
        }
        return sum;
    }, 0);
    step6_cart_total.innerHTML = total;
    handleCheckoutBtn()
}

function handleCheckoutBtn() {
    let goToPaymentBtn = document.getElementById('step6_cart_goToPayment');
    if (checkOut.length > 0) {
        goToPaymentBtn.classList.remove('disabled');
        goToPaymentBtn.innerHTML = `(${checkOut.length}) Thanh toán`;
        goToPaymentBtn.addEventListener('click', function () {
            changeStep('step7_payment');
            console.log('checkOut:', checkOut);

        });
    } else {
        goToPaymentBtn.classList.add('disabled');
        goToPaymentBtn.innerHTML = `Thanh toán`;
    }
}

function renderPayment() {
    let container = document.getElementById('step7_checkoutList')

    if (checkOut.length > 0) {
        let pillListHtml = ``;
        checkOut.map((pillInfo) => {
            let pillItem = `
               <div class="step6_cart_pillList_item display-flex-center" pill_id=${pillInfo.pill.pill_id} pill_name=${pillInfo.pill.pill_name} pill_sell=${pillInfo.pill_sellPrice} pill_img=${pillInfo.pill.pill_imgAddress} pill_quantity=${pillInfo.pill.pillQuantity}>
                    <div class="display-flex-between">
                        <img src="${pillInfo.pill.pill_imgAddress}" alt="" srcset="">
                        <div class="display-flex-column-between " style="align-items:start">
                            <p class="text-1lineClip" style="font-size: 1.5rem;">${pillInfo.pill.pill_name}</p>
                            <div class="display-flex-between">
                                <p style="font-size: 1.5rem; color:var(--red-100); font-weight: bold;">đ ${pillInfo.pill.pill_sellPrice}/vỉ</p>
                                <p class="" style="font-size: 1.5rem;color:var(--gray-30)">x${pillInfo.quantity}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
            pillListHtml += pillItem;
        })
        container.innerHTML = pillListHtml;

        step7_checkout_total.innerHTML = checkOut.reduce((sum, item) => {
            if (item.pill && item.pill.pill_sellPrice) {
                return sum + item.pill.pill_sellPrice * item.quantity;
            }
            return sum;
        }, 0);
    }

    function qrContentGen() {
        let item1ID = 'P123af';
        let item1Quantity = checkOut.find((item) => item.pill.pill_id === item1ID)?.quantity || 0;
        let item2ID = 'S789aj';
        let item2Quantity = checkOut.find((item) => item.pill.pill_id === item2ID)?.quantity || 0;
        let item3ID = 'H764ae';
        let item3Quantity = checkOut.find((item) => item.pill.pill_id === item3ID)?.quantity || 0;
        let item4ID = 'S789aj';
        let item4Quantity = checkOut.find((item) => item.pill.pill_id === item4ID)?.quantity || 0;
        let item5ID = 'P124af';
        let item5Quantity = checkOut.find((item) => item.pill.pill_id === item5ID)?.quantity || 0;
        let item6ID = 'H765ae';
        let item6Quantity = checkOut.find((item) => item.pill.pill_id === item6ID)?.quantity || 0;
        let qrContent = `0000000000,1:${item1Quantity},2:${item2Quantity},3:${item3Quantity},4:${item4Quantity},5:${item5Quantity},6:${item6Quantity}`;
        return qrContent;
    }
    step7_payment_qr.innerHTML = '';
    let qr = qrContentGen()
    new QRCode(document.getElementById('step7_payment_qr'), qr);

    step7_done.addEventListener('click', function () {
        step7_payment_paymentMethod.style = 'display: none!important';
        step7_payment_qr_container.style = 'display: flex!important';
        cart = [];
        checkOut = [];
        sendMessage('pills', qr);
        let countdown = 10;
        let intervalID = setInterval(() => {
            countdown--;
            step7_done.innerHTML = `Hoàn tất (${countdown})`;
        }, 1000);
        setTimeout(() => {
            clearInterval(intervalID);
            window.location.reload();
        }, 10000);
    })

    let checkOutInputs = document.querySelectorAll('#step6_cart input[type="checkbox"]');
    checkOutInputs.forEach(input => {
        input.checked = false;
    });
}

// RULES-001: DO NOT TOUCH INSERT FNC
function insertLogo() {
    let logos = document.querySelectorAll('.logo');
    logos.forEach((logo) => {
        logo.innerHTML = `<img src="/icons/logo.svg" alt="logo" class="logo" />
`;
    });
}
insertLogo();

function insertMascot() {
    let mascots = document.querySelectorAll('.absMascot');
    mascots.forEach((mascot) => {
        mascot.innerHTML = `<img src="/icons/mascot.png" alt="mascot" class="mascot" />
`;
    });
}
insertMascot();

function insertVnEnFlag() {
    const VNflag = document.getElementById('VNFLAG');
    VNflag.innerHTML = ` 
    <img src="/icons/VNFlag.svg" alt="vnFlag" class="flag" />
`
    const ENFLAG = document.getElementById('ENFLAG')
    ENFLAG.innerHTML = `
    <img src="/icons/ENFlag.svg" alt="enFlag" class="flag" />
`
}
insertVnEnFlag()

function insertTopNav3Item() {
    const topNavs = document.querySelectorAll('.topNav3Item')
    topNavs.forEach(topNav => {
        const title = topNav.getAttribute('value')
        topNav.innerHTML = `
            <div class="width-100 display-flex-between padding-2 gap-2">
                <div class="btn-round btn-hover-tranform padding-1 bg-blue-100 text-white" style="font-size: 2.25rem;"
                    onclick="changeStep('${stepHistory[stepHistoryIndex - 1]}', ${true}); checkOut=[]; console.log('${stepHistory}') ;console.log('${stepHistoryIndex}');console.log('${stepHistory[stepHistoryIndex - 1]}') "
                    >
                    <img src="/icons/Back.svg" alt="back" class="width-100 height-100"/>
                </div>
                <h1 style="font-size: 2.5rem;">${title}</h1>
                <div class="btn-round btn-hover-tranform padding-1 bg-blue-50 text-white" style="font-size: 2.25rem;"
                    onclick="changeStep('step6_cart')"><img src="/icons/gioHang.svg" alt="cart" class="width-100 height-100"/>
                </div>
            </div>  
        `
    })
}
insertTopNav3Item()

function insertSearchBar() {
    const searchBars = document.querySelectorAll('.searchBar')
    searchBars.forEach((bar) => {
        bar.innerHTML = `<form action="" method="" class="display-flex-center margin-auto gap-1 padding-1"
                style="width: 80%; background-color: var(--gray-10); border-radius: 1rem; border: 1px solid var(--gray-30);">
                <label for="searchPill"><img src="/icons/lookup.svg" alt="search" />
                </label>
                <input class="width-100" style="font-size: 2rem; border: 0; background-color: var(--gray-10);"
                    type="text" name="searchPill" id="searchPill" placeholder="Tìm kiếm thuốc">
            </form>`
    })
}
insertSearchBar()

function insertSpeakToText() {
    const speakToTexts = document.querySelectorAll('.speakToText')
    speakToTexts.forEach((speakToText) => {
        speakToText.classList.add('btn')
        speakToText.addEventListener('click', () => {
            document.querySelector('#chat').classList.remove('deSelected');
        });
        speakToText.innerHTML = `
        <img src="/icons/record.svg" alt="mic" class="width-100 height-100" style="object-fit: cover;">
`})
}
insertSpeakToText()

function insertListGen(data, parent) {
    if (typeof data === 'string') {
        const p = document.createElement('p');
        p.textContent = data;
        parent.appendChild(p);
    } else if (Array.isArray(data)) {
        const ul = document.createElement('ul');
        ul.style.marginLeft = '2rem'; // Add margin-right to the ul
        data.forEach(item => {
            if (typeof item === 'string') {
                const li = document.createElement('li');
                li.textContent = item;
                ul.appendChild(li);
            } else if (Array.isArray(item)) {
                const nestedUl = document.createElement('ul');
                nestedUl.style.marginLeft = '2rem'; // Add margin-right to the nested ul
                item.forEach(nestedItem => {
                    const nestedLi = document.createElement('li');
                    nestedLi.textContent = nestedItem;
                    nestedUl.appendChild(nestedLi);
                });
                const li = document.createElement('li');
                li.appendChild(nestedUl);
                ul.appendChild(li);
            }
        });
        parent.appendChild(ul);
    }
}

const chatBody = document.getElementById('chatBody');
const userInput = document.getElementById('userInput');

// Handle sending messages
function sendChatMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Add user message to chat
    addMessage(message, 'user');
    userInput.value = '';

    // Call API (placeholder)
    callAIAPI(message)
        .then(response => response.json())
        .then(response => {
            console.log('response:', response);
            addMessage(response.choices[0].message.content, 'ai');
        })
        .catch(error => {
            console.error('Error:', error);
            addMessage('Error: Could not get response', 'ai');
        });

    // Scroll to bottom
    chatBody.scrollTop = chatBody.scrollHeight;
}


// Add message to chat body
function addMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = text;
    chatBody.appendChild(messageDiv);
}

// Placeholder API call
async function callAIAPI(message) {
    return fetch(`https://api.lenguyenbaolong.art/api/v1/chats_openai/${aiID}/chat/completions`, {
        method: 'POST',
        headers: {
            ContentType: 'application/json',
            Authorization: `Bearer ${ragToken}`,
        },
        body: JSON.stringify({

            "model": "deepseek-chat@DeepSeek",
            "messages": [
                {
                    "role": "user",
                    "content": message
                }
            ],
            "max_tokens": 256,
            "stream": false
        })
    })

}

function closeChat() {
    document.querySelector('#chat').classList.add('deSelected');
}


// Handle Enter key press
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendChatMessage();
    }
});

// Auto-scroll to bottom when new messages are added
const observer = new MutationObserver(() => {
    chatBody.scrollTop = chatBody.scrollHeight;
});
observer.observe(chatBody, { childList: true });