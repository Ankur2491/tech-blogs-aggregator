const companies = [
    {
      value: "500px",
      label: "500px"
    },
    {
      value: "8th Light",
      label: "8th Light"
    },
    {
      value: "99designs",
      label: "99designs"
    },
    {
      value: "AdRoll",
      label: "AdRoll"
    },
    {
      value: "Addepar",
      label: "Addepar"
    },
    {
      value: "Affinity",
      label: "Affinity"
    },
    {
      value: "Airbrake",
      label: "Airbrake"
    },
    {
      value: "AirPair",
      label: "AirPair"
    },
    {
      value: "Advance Web Machinery",
      label: "Advance Web Machinery"
    },
    {
      value: "Airbnb",
      label: "Airbnb"
    },
    {
      value: "Airtame",
      label: "Airtame"
    },
    {
      value: "Algolia",
      label: "Algolia"
    },
    {
      value: "Allegro.tech",
      label: "Allegro.tech"
    },
    {
      value: "Appnexus",
      label: "Appnexus"
    },
    {
      value: "Arkency",
      label: "Arkency"
    },
    {
      value: "Artsy",
      label: "Artsy"
    },
    {
      value: "Asana",
      label: "Asana"
    },
    {
      value: "Atlassian",
      label: "Atlassian"
    },
    {
      value: "Atomic Object",
      label: "Atomic Object"
    },
    {
      value: "Auth0",
      label: "Auth0"
    },
    {
      value: "Avenue Code",
      label: "Avenue Code"
    },
    {
      value: "AWS",
      label: "AWS"
    },
    {
      value: "Azavea",
      label: "Azavea"
    },
    {
      value: "Babbel",
      label: "Babbel"
    },
    {
      value: "Backtrace",
      label: "Backtrace"
    },
    {
      value: "Badoo",
      label: "Badoo"
    },
    {
      value: "Bandcamp",
      label: "Bandcamp"
    },
    {
      value: "Base Lab",
      label: "Base Lab"
    },
    {
      value: "Bazaarvoice",
      label: "Bazaarvoice"
    },
    {
      value: "BBC",
      label: "BBC"
    },
    {
      value: "Benchling",
      label: "Benchling"
    },
    {
      value: "BenefitFocus",
      label: "BenefitFocus"
    },
    {
      value: "Bigcommerce",
      label: "Bigcommerce"
    },
    {
      value: "Binary Studio",
      label: "Binary Studio"
    },
    {
      value: "Bitly",
      label: "Bitly"
    },
    {
      value: "BitTorrent",
      label: "BitTorrent"
    },
    {
      value: "BlaBlaCar",
      label: "BlaBlaCar"
    },
    {
      value: "BlackRock",
      label: "BlackRock"
    },
    {
      value: "Blender",
      label: "Blender"
    },
    {
      value: "Blogfoster",
      label: "Blogfoster"
    },
    {
      value: "Boxever",
      label: "Boxever"
    },
    {
      value: "Brandwatch",
      label: "Brandwatch"
    },
    {
      value: "Buzzfeed",
      label: "Buzzfeed"
    },
    {
      value: "Canva",
      label: "Canva"
    },
    {
      value: "Capgemini",
      label: "Capgemini"
    },
    {
      value: "CenturyLink",
      label: "CenturyLink"
    },
    {
      value: "Cerner",
      label: "Cerner"
    },
    {
      value: "Chaps",
      label: "Chaps"
    },
    {
      value: "Chartbeat",
      label: "Chartbeat"
    },
    {
      value: "Chef",
      label: "Chef"
    },
    {
      value: "Clever",
      label: "Clever"
    },
    {
      value: "CleverTap",
      label: "CleverTap"
    },
    {
      value: "CloudBees",
      label: "CloudBees"
    },
    {
      value: "Cloudera",
      label: "Cloudera"
    },
    {
      value: "Cloudflare",
      label: "Cloudflare"
    },
    {
      value: "CockroachDB",
      label: "CockroachDB"
    },
    {
      value: "Code Better",
      label: "Code Better"
    },
    {
      value: "Codelitt",
      label: "Codelitt"
    },
    {
      value: "Codemancers",
      label: "Codemancers"
    },
    {
      value: "Codementor",
      label: "Codementor"
    },
    {
      value: "CodeName One",
      label: "CodeName One"
    },
    {
      value: "Codeship",
      label: "Codeship"
    },
    {
      value: "Coinbase",
      label: "Coinbase"
    },
    {
      value: "Collective Idea",
      label: "Collective Idea"
    },
    {
      value: "Commercetools",
      label: "Commercetools"
    },
    {
      value: "Cond\u00e9 Nast",
      label: "Cond\u00e9 Nast"
    },
    {
      value: "Confluent",
      label: "Confluent"
    },
    {
      value: "Convox",
      label: "Convox"
    },
    {
      value: "Coolblue",
      label: "Coolblue"
    },
    {
      value: "Credit Karma",
      label: "Credit Karma"
    },
    {
      value: "Criteo",
      label: "Criteo"
    },
    {
      value: "Crowdfire",
      label: "Crowdfire"
    },
    {
      value: "CSC - IT Center For Science - Cloud Team",
      label: "CSC - IT Center For Science - Cloud Team"
    },
    {
      value: "Curalate",
      label: "Curalate"
    },
    {
      value: "Data Artisans",
      label: "Data Artisans"
    },
    {
      value: "Databricks",
      label: "Databricks"
    },
    {
      value: "DataFox",
      label: "DataFox"
    },
    {
      value: "Deezer",
      label: "Deezer"
    },
    {
      value: "DeferPanic",
      label: "DeferPanic"
    },
    {
      value: "Deliveroo",
      label: "Deliveroo"
    },
    {
      value: "DigitalOcean",
      label: "DigitalOcean"
    },
    {
      value: "Discord",
      label: "Discord"
    },
    {
      value: "Docker",
      label: "Docker"
    },
    {
      value: "DoorDash",
      label: "DoorDash"
    },
    {
      value: "Doximity",
      label: "Doximity"
    },
    {
      value: "Drivy",
      label: "Drivy"
    },
    {
      value: "Dropbox",
      label: "Dropbox"
    },
    {
      value: "Ebay",
      label: "Ebay"
    },
    {
      value: "eFounders",
      label: "eFounders"
    },
    {
      value: "Eharmony",
      label: "Eharmony"
    },
    {
      value: "Elastic",
      label: "Elastic"
    },
    {
      value: "Engine Yard",
      label: "Engine Yard"
    },
    {
      value: "Entelo",
      label: "Entelo"
    },
    {
      value: "Envato",
      label: "Envato"
    },
    {
      value: "Envoy",
      label: "Envoy"
    },
    {
      value: "Erlang Solutions",
      label: "Erlang Solutions"
    },
    {
      value: "Etsy",
      label: "Etsy"
    },
    {
      value: "Eventbrite",
      label: "Eventbrite"
    },
    {
      value: "Evernote",
      label: "Evernote"
    },
    {
      value: "Evil Martians",
      label: "Evil Martians"
    },
    {
      value: "Expedia",
      label: "Expedia"
    },
    {
      value: "Facebook",
      label: "Facebook"
    },
    {
      value: "Facebook AI Research",
      label: "Facebook AI Research"
    },
    {
      value: "Faraday",
      label: "Faraday"
    },
    {
      value: "Feedzai",
      label: "Feedzai"
    },
    {
      value: "Fiftythree",
      label: "Fiftythree"
    },
    {
      value: "Findmypast",
      label: "Findmypast"
    },
    {
      value: "Finn.no",
      label: "Finn.no"
    },
    {
      value: "Firmafon",
      label: "Firmafon"
    },
    {
      value: "Flickr",
      label: "Flickr"
    },
    {
      value: "Flipboard",
      label: "Flipboard"
    },
    {
      value: "Foursquare",
      label: "Foursquare"
    },
    {
      value: "Freeletics",
      label: "Freeletics"
    },
    {
      value: "Funding Circle",
      label: "Funding Circle"
    },
    {
      value: "Future Processing",
      label: "Future Processing"
    },
    {
      value: "Galois",
      label: "Galois"
    },
    {
      value: "GameChanger",
      label: "GameChanger"
    },
    {
      value: "Geoblink",
      label: "Geoblink"
    },
    {
      value: "Gilt",
      label: "Gilt"
    },
    {
      value: "GIPHY",
      label: "GIPHY"
    },
    {
      value: "GitHub",
      label: "GitHub"
    },
    {
      value: "GitHub Old",
      label: "GitHub Old"
    },
    {
      value: "GoCardless",
      label: "GoCardless"
    },
    {
      value: "Good Eggs",
      label: "Good Eggs"
    },
    {
      value: "Google Online Security",
      label: "Google Online Security"
    },
    {
      value: "Google Research",
      label: "Google Research"
    },
    {
      value: "GoSquared",
      label: "GoSquared"
    },
    {
      value: "GO-JEK",
      label: "GO-JEK"
    },
    {
      value: "Grab",
      label: "Grab"
    },
    {
      value: "Grafana",
      label: "Grafana"
    },
    {
      value: "Grammarly",
      label: "Grammarly"
    },
    {
      value: "Grofers",
      label: "Grofers"
    },
    {
      value: "Grouper",
      label: "Grouper"
    },
    {
      value: "Groupon",
      label: "Groupon"
    },
    {
      value: "Guardian",
      label: "Guardian"
    },
    {
      value: "Gusto",
      label: "Gusto"
    },
    {
      value: "HackerEarth",
      label: "HackerEarth"
    },
    {
      value: "Haptik",
      label: "Haptik"
    },
    {
      value: "Harry's",
      label: "Harry's"
    },
    {
      value: "HashiCorp",
      label: "HashiCorp"
    },
    {
      value: "Hashnode",
      label: "Hashnode"
    },
    {
      value: "Hashrocket",
      label: "Hashrocket"
    },
    {
      value: "Hasura",
      label: "Hasura"
    },
    {
      value: "Haus",
      label: "Haus"
    },
    {
      value: "Heap",
      label: "Heap"
    },
    {
      value: "Helpshift",
      label: "Helpshift"
    },
    {
      value: "HERE",
      label: "HERE"
    },
    {
      value: "Heroku",
      label: "Heroku"
    },
    {
      value: "HireArt",
      label: "HireArt"
    },
    {
      value: "HomeAway",
      label: "HomeAway"
    },
    {
      value: "Honeybadger",
      label: "Honeybadger"
    },
    {
      value: "Hootsuite",
      label: "Hootsuite"
    },
    {
      value: "Hostinger",
      label: "Hostinger"
    },
    {
      value: "Housing.com",
      label: "Housing.com"
    },
    {
      value: "HubSpot",
      label: "HubSpot"
    },
    {
      value: "IBM developerWorks",
      label: "IBM developerWorks"
    },
    {
      value: "IFTTT",
      label: "IFTTT"
    },
    {
      value: "IMVU",
      label: "IMVU"
    },
    {
      value: "Imaginea",
      label: "Imaginea"
    },
    {
      value: "Imgur",
      label: "Imgur"
    },
    {
      value: "Indeed",
      label: "Indeed"
    },
    {
      value: "Instacart",
      label: "Instacart"
    },
    {
      value: "Instagram",
      label: "Instagram"
    },
    {
      value: "Intel",
      label: "Intel"
    },
    {
      value: "Intent HQ",
      label: "Intent HQ"
    },
    {
      value: "Intent Media",
      label: "Intent Media"
    },
    {
      value: "Intercom",
      label: "Intercom"
    },
    {
      value: "Intuit",
      label: "Intuit"
    },
    {
      value: "InVision",
      label: "InVision"
    },
    {
      value: "Jane Street",
      label: "Jane Street"
    },
    {
      value: "Jet Technology",
      label: "Jet Technology"
    },
    {
      value: "Jobandtalent",
      label: "Jobandtalent"
    },
    {
      value: "JobTeaser",
      label: "JobTeaser"
    },
    {
      value: "Jolly Good Code",
      label: "Jolly Good Code"
    },
    {
      value: "Just Eat",
      label: "Just Eat"
    },
    {
      value: "Khan Academy",
      label: "Khan Academy"
    },
    {
      value: "Kickstarter",
      label: "Kickstarter"
    },
    {
      value: "King",
      label: "King"
    },
    {
      value: "Kinvolk",
      label: "Kinvolk"
    },
    {
      value: "Kogan.com",
      label: "Kogan.com"
    },
    {
      value: "Kolosek",
      label: "Kolosek"
    },
    {
      value: "Latacora",
      label: "Latacora"
    },
    {
      value: "Laterooms",
      label: "Laterooms"
    },
    {
      value: "LendingHome",
      label: "LendingHome"
    },
    {
      value: "LINE",
      label: "LINE"
    },
    {
      value: "LinkedIn",
      label: "LinkedIn"
    },
    {
      value: "LiveChat",
      label: "LiveChat"
    },
    {
      value: "LiveRamp",
      label: "LiveRamp"
    },
    {
      value: "Localytics",
      label: "Localytics"
    },
    {
      value: "Lyft",
      label: "Lyft"
    },
    {
      value: "Made Tech",
      label: "Made Tech"
    },
    {
      value: "Mallow Tech",
      label: "Mallow Tech"
    },
    {
      value: "Mandrill",
      label: "Mandrill"
    },
    {
      value: "MapTiler",
      label: "MapTiler"
    },
    {
      value: "Medium",
      label: "Medium"
    },
    {
      value: "MemSQL",
      label: "MemSQL"
    },
    {
      value: "Mesosphere",
      label: "Mesosphere"
    },
    {
      value: "Microsoft Python Engineering",
      label: "Microsoft Python Engineering"
    },
    {
      value: "Mixmax",
      label: "Mixmax"
    },
    {
      value: "Mixpanel",
      label: "Mixpanel"
    },
    {
      value: "MongoDB",
      label: "MongoDB"
    },
    {
      value: "Monsanto",
      label: "Monsanto"
    },
    {
      value: "Moove-it",
      label: "Moove-it"
    },
    {
      value: "Mozilla Automation Team",
      label: "Mozilla Automation Team"
    },
    {
      value: "Mozilla Hacks",
      label: "Mozilla Hacks"
    },
    {
      value: "Mozilla Release Engineering",
      label: "Mozilla Release Engineering"
    },
    {
      value: "Myntra",
      label: "Myntra"
    },
    {
      value: "Myntra Data Science",
      label: "Myntra Data Science"
    },
    {
      value: "Netflix",
      label: "Netflix"
    },
    {
      value: "New York Times",
      label: "New York Times"
    },
    {
      value: "Nextdoor",
      label: "Nextdoor"
    },
    {
      value: "Nordic APIs",
      label: "Nordic APIs"
    },
    {
      value: "Novoda",
      label: "Novoda"
    },
    {
      value: "NPR Apps",
      label: "NPR Apps"
    },
    {
      value: "Nvidia",
      label: "Nvidia"
    },
    {
      value: "OCTO Technology",
      label: "OCTO Technology"
    },
    {
      value: "Okta",
      label: "Okta"
    },
    {
      value: "OLX",
      label: "OLX"
    },
    {
      value: "OpenDNS",
      label: "OpenDNS"
    },
    {
      value: "OpenTable",
      label: "OpenTable"
    },
    {
      value: "OpenTable UK",
      label: "OpenTable UK"
    },
    {
      value: "Oursky",
      label: "Oursky"
    },
    {
      value: "Oyster",
      label: "Oyster"
    },
    {
      value: "Opensooq",
      label: "Opensooq"
    },
    {
      value: "Panorama Education",
      label: "Panorama Education"
    },
    {
      value: "Paypal",
      label: "Paypal"
    },
    {
      value: "Periscope Data",
      label: "Periscope Data"
    },
    {
      value: "PicCollage",
      label: "PicCollage"
    },
    {
      value: "Pinterest",
      label: "Pinterest"
    },
    {
      value: "Pivotal",
      label: "Pivotal"
    },
    {
      value: "Postman",
      label: "Postman"
    },
    {
      value: "Postmark",
      label: "Postmark"
    },
    {
      value: "Postmates",
      label: "Postmates"
    },
    {
      value: "Prezi",
      label: "Prezi"
    },
    {
      value: "PubNub:",
      label: "PubNub:"
    },
    {
      value: "PullReview",
      label: "PullReview"
    },
    {
      value: "Pusher",
      label: "Pusher"
    },
    {
      value: "Raizlabs",
      label: "Raizlabs"
    },
    {
      value: "RapidAPI",
      label: "RapidAPI"
    },
    {
      value: "REA Group",
      label: "REA Group"
    },
    {
      value: "Realm.io",
      label: "Realm.io"
    },
    {
      value: "Redbubble",
      label: "Redbubble"
    },
    {
      value: "Redino",
      label: "Redino"
    },
    {
      value: "Red Hat",
      label: "Red Hat"
    },
    {
      value: "Remind",
      label: "Remind"
    },
    {
      value: "RetailMeNot",
      label: "RetailMeNot"
    },
    {
      value: "Rightscale",
      label: "Rightscale"
    },
    {
      value: "Riot Games",
      label: "Riot Games"
    },
    {
      value: "RisingStack",
      label: "RisingStack"
    },
    {
      value: "RoseHosting",
      label: "RoseHosting"
    },
    {
      value: "Runtastic",
      label: "Runtastic"
    },
    {
      value: "Salesforce",
      label: "Salesforce"
    },
    {
      value: "Schibsted Tech Polska",
      label: "Schibsted Tech Polska"
    },
    {
      value: "Scrapinghub",
      label: "Scrapinghub"
    },
    {
      value: "Scrunch",
      label: "Scrunch"
    },
    {
      value: "Secret Escapes",
      label: "Secret Escapes"
    },
    {
      value: "Segment",
      label: "Segment"
    },
    {
      value: "Semantics3",
      label: "Semantics3"
    },
    {
      value: "Semaphore CI Community",
      label: "Semaphore CI Community"
    },
    {
      value: "Semaphore CI Engineering",
      label: "Semaphore CI Engineering"
    },
    {
      value: "Sensible",
      label: "Sensible"
    },
    {
      value: "Serverless",
      label: "Serverless"
    },
    {
      value: "Settled",
      label: "Settled"
    },
    {
      value: "Shape Security",
      label: "Shape Security"
    },
    {
      value: "Sharethis",
      label: "Sharethis"
    },
    {
      value: "Shazam",
      label: "Shazam"
    },
    {
      value: "Shopify",
      label: "Shopify"
    },
    {
      value: "ShowMax",
      label: "ShowMax"
    },
    {
      value: "Shyp",
      label: "Shyp"
    },
    {
      value: "Sift Science",
      label: "Sift Science"
    },
    {
      value: "SitePoint",
      label: "SitePoint"
    },
    {
      value: "Sky Betting & Gaming",
      label: "Sky Betting & Gaming"
    },
    {
      value: "Skyscanner",
      label: "Skyscanner"
    },
    {
      value: "Slack",
      label: "Slack"
    },
    {
      value: "Small Improvements",
      label: "Small Improvements"
    },
    {
      value: "SmartRecruiters",
      label: "SmartRecruiters"
    },
    {
      value: "Snyk",
      label: "Snyk"
    },
    {
      value: "Songkick",
      label: "Songkick"
    },
    {
      value: "Soshace",
      label: "Soshace"
    },
    {
      value: "Soundcloud",
      label: "Soundcloud"
    },
    {
      value: "Speedledger",
      label: "Speedledger"
    },
    {
      value: "Spotify",
      label: "Spotify"
    },
    {
      value: "Sqreen",
      label: "Sqreen"
    },
    {
      value: "Square",
      label: "Square"
    },
    {
      value: "Squarespace",
      label: "Squarespace"
    },
    {
      value: "Stack Overflow",
      label: "Stack Overflow"
    },
    {
      value: "Stackshare",
      label: "Stackshare"
    },
    {
      value: "Stitch Fix",
      label: "Stitch Fix"
    },
    {
      value: "Stormpath",
      label: "Stormpath"
    },
    {
      value: "Strava",
      label: "Strava"
    },
    {
      value: "Stride",
      label: "Stride"
    },
    {
      value: "Stripe",
      label: "Stripe"
    },
    {
      value: "SurveyMonkey",
      label: "SurveyMonkey"
    },
    {
      value: "Swiggy",
      label: "Swiggy"
    },
    {
      value: "Takipi",
      label: "Takipi"
    },
    {
      value: "Target",
      label: "Target"
    },
    {
      value: "TaskRabbit",
      label: "TaskRabbit"
    },
    {
      value: "Teamwork",
      label: "Teamwork"
    },
    {
      value: "Teespring",
      label: "Teespring"
    },
    {
      value: "theScore",
      label: "theScore"
    },
    {
      value: "Thoughtbot",
      label: "Thoughtbot"
    },
    {
      value: "ThoughtWorks",
      label: "ThoughtWorks"
    },
    {
      value: "Thumbtack",
      label: "Thumbtack"
    },
    {
      value: "Ticketmaster",
      label: "Ticketmaster"
    },
    {
      value: "Timescale",
      label: "Timescale"
    },
    {
      value: "Tinder",
      label: "Tinder"
    },
    {
      value: "Toptal",
      label: "Toptal"
    },
    {
      value: "TrackMaven",
      label: "TrackMaven"
    },
    {
      value: "Transferwise",
      label: "Transferwise"
    },
    {
      value: "Trello",
      label: "Trello"
    },
    {
      value: "TripAdvisor",
      label: "TripAdvisor"
    },
    {
      value: "Trivago",
      label: "Trivago"
    },
    {
      value: "TrueCar",
      label: "TrueCar"
    },
    {
      value: "Tumblr",
      label: "Tumblr"
    },
    {
      value: "Twilio",
      label: "Twilio"
    },
    {
      value: "Twitter",
      label: "Twitter"
    },
    {
      value: "Twitch",
      label: "Twitch"
    },
    {
      value: "Uber",
      label: "Uber"
    },
    {
      value: "Universe",
      label: "Universe"
    },
    {
      value: "Upday",
      label: "Upday"
    },
    {
      value: "UpGrad",
      label: "UpGrad"
    },
    {
      value: "Vena Solutions",
      label: "Vena Solutions"
    },
    {
      value: "Venmo",
      label: "Venmo"
    },
    {
      value: "Version",
      label: "Version"
    },
    {
      value: "Vevo",
      label: "Vevo"
    },
    {
      value: "Vine",
      label: "Vine"
    },
    {
      value: "Vinted",
      label: "Vinted"
    },
    {
      value: "VNGRS",
      label: "VNGRS"
    },
    {
      value: "VTS",
      label: "VTS"
    },
    {
      value: "WalmartLabs",
      label: "WalmartLabs"
    },
    {
      value: "Wattpad",
      label: "Wattpad"
    },
    {
      value: "Wayfair",
      label: "Wayfair"
    },
    {
      value: "Wealthfront",
      label: "Wealthfront"
    },
    {
      value: "We Are Wizards",
      label: "We Are Wizards"
    },
    {
      value: "WebEngage",
      label: "WebEngage"
    },
    {
      value: "Wemake.services",
      label: "Wemake.services"
    },
    {
      value: "WePay",
      label: "WePay"
    },
    {
      value: "Wimdu",
      label: "Wimdu"
    },
    {
      value: "Wingify",
      label: "Wingify"
    },
    {
      value: "Wolox",
      label: "Wolox"
    },
    {
      value: "Wombat Security Technologies",
      label: "Wombat Security Technologies"
    },
    {
      value: "Wonga Technology",
      label: "Wonga Technology"
    },
    {
      value: "WyeWork",
      label: "WyeWork"
    },
    {
      value: "XING",
      label: "XING"
    },
    {
      value: "Xmartlabs",
      label: "Xmartlabs"
    },
    {
      value: "Yahoo",
      label: "Yahoo"
    },
    {
      value: "Yammer",
      label: "Yammer"
    },
    {
      value: "Yelp",
      label: "Yelp"
    },
    {
      value: "YLD!",
      label: "YLD!"
    },
    {
      value: "ZeeMee",
      label: "ZeeMee"
    },
    {
      value: "Zendesk",
      label: "Zendesk"
    },
    {
      value: "Zendesk(Old)",
      label: "Zendesk(Old)"
    },
    {
      value: "Zenefits",
      label: "Zenefits"
    },
    {
      value: "Zillow",
      label: "Zillow"
    },
    {
      value: "Zomato",
      label: "Zomato"
    },
    {
      value: "Zoosk",
      label: "Zoosk"
    },
    {
      value: "Zulily",
      label: "Zulily"
    },
    {
      value: "Zumba",
      label: "Zumba"
    }
  ]
  export default companies;