var handler = StripeCheckout.configure({
    key: 'pk_test_cS222704wqEfzHQpnhWvoiOE',
    // image: '/128x128.png',
    token: function(token) {
        console.log(token)
        console.log(token.id)
        var chargesRef = new Firebase("https://jsjoboard.firebaseio.com/charges");
        chargesRef.push({
            amount: 2000,
            currency: "usd",
            card: token.id,
        });
    }
});

$('#customButton').on('click', function(e) {
    // Open Checkout with further options
    handler.open({
        name: 'Demo Site',
        description: '2 widgets ($20.00)',
        amount: 2000
    });
    e.preventDefault();
});

// Close Checkout on page navigation
$(window).on('popstate', function() {
    handler.close();
});
