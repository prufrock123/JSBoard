
    _.templateSettings.interpolate = /{([\s\S]+?)}/g;

    mocha.setup({
        ui: "bdd",
        ignoreLeaks: true
    });

    var assert = chai.assert;
    var expect = chai.expect;

    //--- your setup code goes here (i.e. create test instances of your Constructors)

    var router = new app.JobBoardRouter();

    //--- your tests go here
    // an example test suite
    describe("Array", function(){
        describe("#indexOf()", function(){
            it("should return -1 when the value is not present", function(){
                expect([1,2,3].indexOf(5)).to.equal(-1);
                expect([1,2,3].indexOf(0)).to.equal(-1);
            })
        })
    })
    //--- your tests go here
    
    describe("Router", function(){
        describe("#initialize()", function(){
            describe("creating views", function(){
                it("Should create an appView", function(){
                    expect(router).to.have.property('appview');
                })
                it("Should create a joblistingsview", function(){
                    expect(router).to.have.property('joblistingsview');
                })
                it("Should create a joblistingexpandedview", function(){
                    expect(router).to.have.property('joblistingexpandedview')
                })
                it("Should create a jobpostformview", function(){
                    expect(router).to.have.property('jobpostformview')
                })
            })
            describe("router should append views", function(){
                it("Should append joblistingsview to appview", function(){
                    var joblistingsContainer = router.joblistingsview.$el;
                    var container = router.appview.$el.find(".container");

                    expect( joblistingsContainer.closest('.container')[0] ).to.equal( container[0] )
                })
            })
        })
    })

    mocha.globals(["jQuery"]);
    mocha.run();
    
