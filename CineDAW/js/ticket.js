document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const childQuantity = parseInt(document.getElementById('childTicketQuantity').value);
    const childPrice = parseFloat(document.getElementById('childTicketPrice').value);
    const childTotal = childQuantity * childPrice;

    const adultQuantity = parseInt(document.getElementById('adultTicketQuantity').value);
    const adultPrice = parseFloat(document.getElementById('adultTicketPrice').value);
    const adultTotal = adultQuantity * adultPrice;

    const total = childTotal + adultTotal;

    const invoiceDetails = `
        Cantidad de Tickets de Niños: ${childQuantity} <br>
        Precio por Ticket de Niño: $${childPrice.toFixed(2)} <br>
        Total por Tickets de Niños: $${childTotal.toFixed(2)} <br><br>
        Cantidad de Tickets de Adultos: ${adultQuantity} <br>
        Precio por Ticket de Adulto: $${adultPrice.toFixed(2)} <br>
        Total por Tickets de Adultos: $${adultTotal.toFixed(2)} <br><br>
        Total a Pagar: $${total.toFixed(2)}
    `;

    document.getElementById('invoiceDetails').innerHTML = invoiceDetails;
    document.getElementById('invoice').style.display = 'block';
});