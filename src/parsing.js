/**
 * @typedef { {
 * title: string,
 * description: string,
 * datetime: string,
 * responsible: string,
 * type : string,
 * }} Veranstaltung
 */

/**
 * @param {Veranstaltung} data
 * @returns {string}
 */
function buildMailLink(data) {
    const { title, description, location, datetime, responsible, type, targetGroups } = data;
    const body = `Liebe Technik AG,

Veranstaltung: ${title}
Beschreibung: ${description}
Beginn/Ende: ${datetime}
Verantwortlich: ${responsible}
LANiS Kategorie: ${type}

[Ihre Nachricht]

Viele Grüße,
[Ihr Name]

* Diese E-Mail wurde mit der Send2ATec-Browsererweiterung generiert und könnte nicht mehr aktuelle Daten aus dem Schulportal enthalten *`;
    return encodeURI(
        `mailto:technik@grb-online.net/?subject=Anmeldung: ${title}&body=${body}&bcc=christian.fuchte@grb-online.net`,
    );
}

/**
 *
 * @param {HTMLElement} body
 * @param {HTMLElement} header
 * @returns {Veranstaltung}
 */
function parseData(body, header) {
    const title = header.querySelector("h4.modal-title").innerHTML.split("<span")[0];
    const type = header.querySelector("h4 > span.label").innerHTML.split(">")[2];

    const description = body.querySelector("div.bootbox-body i").innerHTML;
    const datetime = body.querySelector(".bootbox-body > b:nth-child(2)").innerHTML;

    const bodyInner = body.innerHTML;
    const responsible = bodyInner.substring(bodyInner.indexOf("Verantwortlich: ") + 15, bodyInner.indexOf("</span>"));

    return {
        title,
        description,
        datetime,
        responsible,
        type,
    };
}
