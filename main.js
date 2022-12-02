const lotteryTicket = (no,id) => {
    let template = `
    <input type="radio" name="ticket" id="tk${no}" data-tk="${id}">
    <label for="tk${no}" class="bTicket">
        <img class="ltTicket" src="lottery.svg" alt="lottery">
        <p class="txtID">${id}</p>
    </label>
    `;
    return template;
};

let clearReset = () => {
    document.querySelectorAll("input[type='radio']").forEach(data => {
        data.checked = false;
    });
};

const ltForm = document.getElementById("tkForm");

const elements = [2001,2002,2003,2004,2005,2006,2006,2007,2008,2009,2010];

let showTickets = () => {
    elements.forEach((data,count) => {
        ltForm.innerHTML += lotteryTicket(count,data);
    });    
};
showTickets();
let getLottery = el => {
    let index = Math.floor((Math.random() * 10));
    let checkTicket = document.querySelector('input[name="ticket"]:checked');
      
    if(checkTicket != null) {
        let ticketNumber = document.querySelector('input[name="ticket"]:checked').getAttribute("data-tk");
        let txtRes = "The Lottery ID  was <strong>" + elements[index] + "</strong> and you choose <strong>" + ticketNumber + "</strong>";
        if(ticketNumber == elements[index])
        {
            ltForm.innerHTML = `
                <div>
                    <p style="color: #31a314;">${txtRes}</p><br>
                    <img src='winner.gif' class="res">
                </div>
            `;
        }else{
            ltForm.innerHTML = `
                <div>
                    <p style="color: #b82020;">${txtRes}</p><br>
                    <img src='lose.gif' class="res">
                </div>
            `;
        }
        el.style.display = "none";
    }
    else {
        ltForm.innerHTML = `
                <div>
                    <p style="color: #b82020;">Please select an ticket...</p><br>
                    <img src='dance.gif' class="res">
                </div>
            `;
        el.style.display = "none";
    }
};
