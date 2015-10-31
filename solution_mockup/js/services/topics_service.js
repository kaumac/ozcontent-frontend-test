angular.module('solutionPrototype').factory('topicsService', function() {
  var topicsService = {
    getTopics: function() {
      return [
        {
          "cover_image": "https://tctechcrunch2011.files.wordpress.com/2015/08/gchq-nsa.jpg?w=738",
          "topic_title": "Seinfeld",
          "source_materials": 14,
          "tags": ["Digital", "U.s", "Network", "File", "Analyst", "Security", "Data", "United", "States", "Government", "Steal"]
        },
        {
          "cover_image": "http://www.scidev.net/objects_store/thumbnail/B507237B596E150F695B43E2B18A32C4.jpg",
          "topic_title": "Fossil fuel",
          "source_materials": 15,
          "tags": ["Energy", "Large", "Power", "System", "World", "Solar", "Level", "Battery", "Cheap", "Clean"]
        },
        {
          "cover_image": "http://unsdsn.org/wp-content/themes/sdsn/assets/img/sdsn_logo_fc.png",
          "topic_title": "El Corte Inglés",
          "source_materials": 11,
          "tags": ["Business", "Client", "Agency", "Goal", "Expand", "Strategy", "Partner", "Development", "Partnership", "Service"]
        },
        {
          "cover_image": "http://coaching.conversionxl.com/course/wp-content/uploads/2014/02/product-1024x639.jpg",
          "topic_title": "Conversion optimization",
          "source_materials": 13,
          "tags": ["Conversion", "Rate", "Increase", "Optimization", "Cro", "Improve", "Website", "Eye", "Optimize", "Drive"]
        },
        {
          "cover_image": "https://www.brighttalk.com/communication/166183/slide4_001.png",
          "topic_title": "Google",
          "source_materials": 10,
          "tags": ["Referral", "Button", "Push", "Feel", "Hit", "Major", "Spam", "Force", "Property", "Special"]
        },
        {
          "cover_image": "http://media.tumblr.com/7be47feb85f4276a532446a85df8da7a/tumblr_inline_mqe6gnlYiN1qz4rgp.png",
          "topic_title": "Entrepreneurship",
          "source_materials": 11,
          "tags": ["Digital", "Competitive", "Advantage", "Analyst", "Innovation", "Term", "Process", "Hope", "Create", "Fundraise"]
        },
        {
          "cover_image": "https://tctechcrunch2011.files.wordpress.com/2015/08/androidexperiments_landmarker.png?w=1024&amp;h=576",
          "topic_title": "Google",
          "source_materials": 12,
          "tags": ["App", "Mobile", "Apps", "Launch", "Io", "Android", "Developer", "Desktop", "Screen", "Install"]
        },
        {
          "cover_image": "http://static01.nyt.com/images/2015/09/04/business/04blacktech-web-sub/04blacktech-web-sub-facebookJumbo.jpg",
          "topic_title": "United States",
          "source_materials": 5,
          "tags": ["Chief", "Ceo", "Hire", "Executive", "Diversity", "Officer", "Head", "Service", "San", "Francisco", "Profit"]
        },
        {
          "cover_image": "http://linkis.com/url-image/https://assets.entrepreneur.com/content/3x2/822/1413403070-3-leadership-traits-transcend-skills-experience.jpg",
          "topic_title": "Mark Zuckerberg",
          "source_materials": 7,
          "tags": ["State", "Control", "War", "Visit", "Decade", "System", "Justice", "Crime", "Eat", "Statistics"]
        },
        {
          "cover_image": "https://i1.wp.com/tedideas.files.wordpress.com/2013/11/qwa-category-drones1.png?fit=440%2C330",
          "topic_title": "Wu-Tang Clan",
          "source_materials": 15,
          "tags": ["Techcrunch", "Drone", "Quote", "Disrupt", "Original", "Weapon", "Tomorrow", "Laser", "Paypal", "Deliver"]
        },
        {
          "cover_image": "https://tctechcrunch2011.files.wordpress.com/2015/05/digital-genius5.jpg?w=738",
          "topic_title": "Machine learning",
          "source_materials": 11,
          "tags": ["Human", "Machine", "Brain", "Intelligence", "Robot", "Emotion", "Powerful", "Earth", "Value", "Direct"]
        },
        {
          "cover_image": "https://tctechcrunch2011.files.wordpress.com/2015/09/screen-shot-2015-09-02-at-1-12-11-pm.png?w=738",
          "topic_title": "IPhone",
          "source_materials": 10,
          "tags": ["Apple", "Google", "Iphone", "Phone", "Siri", "Amazon", "Samsung", "Version", "Android", "Hardware"]
        },
        // {
        //   "cover_image": "https://hbr.org/resources/images/hbr_opengraph_940x490.png",
        //   "topic_title": "Las Vegas Strip",
        //   "source_materials": 7,
        //   "tags": ["Stats", "Dream", "Clear", "James", "Reason", "Bad", "Noah", "Noah", "Kagan", "Sumome", "Pop"]
        // },
        {
          "cover_image": "http://www.growtheverywhere.com/wp-content/uploads/2014/08/image041.png",
          "topic_title": "E-mail",
          "source_materials": 10,
          "tags": ["Email", "Market", "Subscriber", "Gmail", "Campaign", "Template", "E-mail", "Pro", "Platform", "Cold"]
        },
        {
          "cover_image": "http://mainsitepullzone.boomsocial1.netdna-cdn.com/wp-content/uploads/2015/02/Top-30-Women-in-Social-Media-Who-Are-Rocking-It-LikeAGirl-Kim-Garst.png",
          "topic_title": "San Quentin State Prison",
          "source_materials": 7,
          "tags": ["Infographic", "Pinterest", "Promote", "State", "Pin", "Service", "Dozens", "Unite", "Wednesday", "Outline"]
        },
        {
          "cover_image": "http://www.motherjones.com/files/CHOU_630.jpg",
          "topic_title": "Grace Hopper",
          "source_materials": 8,
          "tags": ["Conference", "Valley", "Speak", "Event", "Silicon", "Speaker", "International", "Presentation", "Ceo", "Summit"]
        }
      ]
    }
  }

  return topicsService;
})