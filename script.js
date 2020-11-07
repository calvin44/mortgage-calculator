$('.calculate').on('click', function(e){
    let principal = $('.principal').val()
    let interest = $('.interest').val()
    let term = $('.term').val()
    if (principal == '') {
        principal = 0
    }

    if (interest == '') {
        interest = 0
    }

    if (term == '') {
        term = 0
    }

    // console.log(principal)
    // console.log(interest)
    // console.log(term)
    interest = interest / 100
    let monthly_payment = (principal * (interest / 12))/(1-(1/(1+(interest/12))**(term * 12)))
    

    // formatting result to currency
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })
    
    result = monthly_payment.toFixed(2)
    if (isNaN(result)){
        result = 'Input Error'
    }

    
    
    
    $('.result').html(`
        <h4>`+ formatter.format(result) +`</h4>
    `)

})


$('.reset').on('click', function() {
    $('.principal').val('')
    $('.interest').val('')
    $('.term').val('') 

    // console.log(principal)
})