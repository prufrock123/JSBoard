
code like

var charge = function(chargeObject){
	amount: chargeObject.amount,
	card: chargeObject.token
}

then

Checkout form (including amount input) sends request to Stripe. 
Stripe sends token, amount & email to the endpoint I give in the form action. 
I give it firebase.com/charges.
When child is added here, I get a data snapshot of this child and use it to 
create a charge




var charges = stripeFire.charges("https://stripe-fire.firebaseio.com/charges", function(err, charge) {
    // Called after a create/update charge request is sent to Stripe
}, "ACCESS_TOKEN", function(chargeData) {
    // Called before a create/update charge request is sent to Stripe
    return chargeData;
});



var chargesRef = new Firebase("https://stripe-fire.firebaseio.com/charges");

// Create a charge
chargesRef.push({
    amount: 400,
    currency: "usd",
    card: "token"
});









post '/charge' do
  token = params[:stripeToken]
  Stripe.api_key = 'sk_test_abcdef1234567890'
  begin
    Stripe::Charge.create(
      card: token,
      amount: 2000,
      currency: 'usd',
      description: 'test charge'
    )

    redirect '/done'
  rescue Stripe::StripeError => e
    @error = e
    erb :error
  end
end