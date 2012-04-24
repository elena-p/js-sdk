/**
 * Kinvey.UserCollection test suite.
 */
describe('Kinvey.UserCollection', function() {
  // Users need an explicit owner.
  before(function(done) {
    Kinvey.User.init(callback(done));
  });
  after(function(done) {
    Kinvey.getCurrentUser().destroy(callback(done));
  });

  // Inheritance
  it('extends Kinvey.Collection.', function() {
    var collection = new Kinvey.UserCollection();
    collection.should.be.an.instanceOf(Kinvey.Collection);
    collection.should.be.an.instanceOf(Kinvey.UserCollection);
  });
  it('is extendable.', function() {
    var SuperCollection = Kinvey.UserCollection.extend();
    (new SuperCollection()).should.be.an.instanceOf(Kinvey.UserCollection);
  });

  // Kinvey.Collection#clear
  describe('#clear', function() {
    it('does invoke the error handler.', function(done) {
      new Kinvey.UserCollection().clear({
        success: function() {
          new Error('Error handler should have been invoked');
        },
        error: function() {
          done();
        }
      });
    });
  });

  // Kinvey.UserCollection#count
  describe('#count', function() {
    // Test suite.
    it('counts the number of entities.', function(done) {
      new Kinvey.UserCollection().count(callback(done, {
        success: function(count) {
          count.should.equal(1);
          done();
        }
      }));
    });
  });

  // Kinvey.Collection#fetch
  describe('#fetch', function() {
    // Test suite.
    it('fetches all users.', function(done) {
      new Kinvey.UserCollection().fetch(callback(done, {
        success: function(list) {
          list.should.have.length(1);
          list[0].should.be.an.instanceOf(Kinvey.User);
          done();
        }
      }));
    });
  });

});