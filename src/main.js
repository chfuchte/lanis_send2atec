const evenModalSelector = "html body.modal-open div.bootbox.modal.fade.in div.modal-dialog";
const eventModalHeaderSelector =
    "html body.modal-open div.bootbox.modal.fade.in div.modal-dialog div.modal-content div.modal-header";
const eventModalBodySelector =
    "html body.modal-open div.bootbox.modal.fade.in div.modal-dialog div.modal-content div.modal-body";
const eventModalFooterSelector =
    "html body.modal-open div.bootbox.modal.fade.in div.modal-dialog div.modal-content div.modal-footer";
const registerBtnATecEventId = "atec_extention_register_event_to_atec_btn";

function handleEventModalAdditionObserved() {
    /**
     * @type {HTMLElement}
     */
    const eventModal = document.querySelector(evenModalSelector);
    /**
     * @type {HTMLElement}
     */
    const eventModalHeader = document.querySelector(eventModalHeaderSelector);
    /**
     * @type {HTMLElement}
     */
    const eventModalBody = document.querySelector(eventModalBodySelector);
    /**
     * @type {HTMLElement}
     */
    const eventModalFooter = document.querySelector(eventModalFooterSelector);

    if (eventModal && eventModalFooter) {
        if (eventModalFooter.querySelector(`#${registerBtnATecEventId}`)) return;
        if (eventModalBody.innerHTML.includes("Klausurplaner")) return;
        if (eventModalBody.innerHTML.includes("Ferien und freie Tage")) return;

        eventModalFooter.style.position = "relative";

        const registerBtn = document.createElement("button");
        registerBtn.classList.add("btn", "btn-primary");
        registerBtn.style.position = "absolute";
        registerBtn.style.left = "10px";
        registerBtn.style.top = "50%";
        registerBtn.style.transform = "translateY(-50%)";
        registerBtn.id = registerBtnATecEventId;
        registerBtn.style.background = "#000000";
        registerBtn.style.padding = "0px 10px 0px 4px";
        registerBtn.style.display = "inline-flex";
        registerBtn.style.flexDirection = "row";
        registerBtn.style.alignItems = "center";
        registerBtn.style.justifyContent = "center";
        registerBtn.style.gap = "4px";

        const imgSrc = `data:image/png;base64,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`;
        const img = document.createElement("img");
        img.src = imgSrc;
        img.style.height = "34px";
        img.style.aspectRatio = "1/1";
        registerBtn.appendChild(img);

        const text = document.createElement("span");
        text.innerText = "AN TECHNIK SENDEN";

        registerBtn.appendChild(text);

        registerBtn.onclick = () => {
            try {
                const res = parseData(eventModalBody, eventModalHeader);
                const mailLink = buildMailLink(res);
                console.log(mailLink);
                window.open(mailLink);
            } catch (e) {
                console.error(e);
                // TODO: make nicer
                alert(
                    "Automatische E-Mail generierung fehlgeschlagen. Bitte schreiben Sie eine E-Mail an technik@grb-online.net mit den Informationen der Veranstaltung.",
                );
            }
        };
        eventModalFooter.appendChild(registerBtn);
    }
}

function init() {
    const observer = new MutationObserver(() => {
        if (document.querySelector("body").classList.contains("modal-open")) {
            handleEventModalAdditionObserved();
        }
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class"],
        attributeOldValue: false,
        characterData: false,
        characterDataOldValue: false,
    });
    if (document.querySelector("body").classList.contains("modal-open")) {
        handleEventModalAdditionObserved();
    }
}

init();
