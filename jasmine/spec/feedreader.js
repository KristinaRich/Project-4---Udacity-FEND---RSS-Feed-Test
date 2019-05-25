/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
/*KR - Comments made by me start with KR
 * to distinguish them from the Udacity comments.
 */
/*KR - The code was written in Vanilla JS, although the code
 * which was provided by Udacity is jQuery based.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('RSS Feeds defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* KR - I used the standard for function to loop through the array.
         * The url string should not be empty.*/
         it ('URL defined', function() {
           for (i = 0; i <=3; i++) {
            expect(allFeeds[i].url).toBeDefined();
            expect(allFeeds[i].url).not.toBe('');
           }
         });


         /*KR - I followed the same procedure as in the test "URL defined"*/
         it ('name defined', function() {
           for (i=0; i<=3; i++) {
            expect(allFeeds[i].name).toBeDefined();
            expect(allFeeds[i].name).not.toBe('');
           }
         });
    });


describe('The menu', function() {
  /*KR - For these tests, I accessed the HTML elements and checked
   * the classlist content.
   */

        it ('menu hidden', function() {
          let body = document.querySelector('body');
          expect(body.classList.contains('menu-hidden')).toBe(true);
        });

       it ('menu changes visibility by click', function() {
         let menuLink = document.querySelector('.menu-icon-link');
         let body = document.querySelector('body');

         menuLink.click();
         expect(body.classList.contains('menu-hidden')).toBe(false);

         menuLink.click();
         expect(body.classList.contains('menu-hidden')).toBe(true);

       });
});


  /* KR - This test checks if the feed is loaded and en enty appears.
    * It was implemented with the beforeEach and asynchronous "done" function.
    * The feed entry element was accessed within and variable and it is checked if
    * the entry value is empty.
  */
describe ('Initial Entries', function() {

      beforeEach(function(done) {
        loadFeed(0, done);
      });

      it ('loadFeed contains an entry', function() {
       let feedEntry = document.querySelector('.feed .entry');
       expect(feedEntry).not.toBe('');
      });
});

  /*KR - In this test, the initialfeed load is compared to another feed load.
   * They are not expected to be the same; on this way it can be checked if
   * the content is changing.
   */
describe ('New Feed Selection', function() {

     let feedOne, feedTwo;

     beforeEach(function(done) {
        loadFeed(0, function() {
            feedOne = document.querySelector('.feed').innerHTML;
        });

        loadFeed(1, function() {
            feedTwo = document.querySelector('.feed').innerHTML;
            done();
        });
     });

      it ('content changing', function() {
        expect(feedOne).not.toBe(feedTwo);

      });

});

}());
