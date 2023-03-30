// import { PLACEHOLDER_IMAGE } from 'Constants'
import { Helmet } from 'react-helmet'

const DEFAULTS = {
  displayTitle: 'Sessami',
  description:
    'The grass roots event management and ticketing software, Grow your audience and your events.',
  // image1: PLACEHOLDER_IMAGE,
  url: import.meta.env.VITE_PRODUCTION_URL || 'https://sessami.co',

  keywords:
    // general
    'Sessami, Sessami Events, Event Management, Ticket Management,' +
    // for hosts
    'Event Hosting Tool, Event Management Tools, Event Marketing, Event Promotion, Event Ticketing, Event Ticketing Software, Event Ticketing System, Event Ticketing Website, Event Ticketing Websites, Event Tickets, Event Tickets Online, Event Tickets Website, Event Tickets Websites, Event Website, Event Websites, Eventbrite, Eventbrite Alternative, Eventbrite Competitors, Eventbrite' +
    // for attendees
    'Buy Event Tickets Online, Buy Concert Tickets Online, Buy Tickets Online, Buy Tickets,' +
    'Find Events in UK,',

  // allow indexing on production site
  followStatus: import.meta.env.NODE_ENV === 'production',
  indexStatus: import.meta.env.NODE_ENV === 'production',
}

const Seo = ({ override }) => {
  console.info('@Seo', DEFAULTS, override)
  // Basic Information
  const title = override?.title || DEFAULTS.displayTitle
  const description = override?.description || DEFAULTS.description
  const url = window?.location?.href || DEFAULTS.url
  // const url = DEFAULTS.url // TODO: use window.location.href for dynamic url in production later
  const image = override?.image || DEFAULTS.image1
  const keywords = override?.keywords || DEFAULTS.keywords

  // OpenGraph
  // const ogImageWidth = override?.opengraphImage?.mediaDetails?.width
  // const ogImageHeight = override?.opengraphImage?.mediaDetails?.height
  const twitterCardType = 'summary_large_image'

  // Articles
  const author = override?.opengraphAuthor || 'Sessami'
  const publishedDate = override?.opengraphPublishedTime
  const opengraphPublisher = override?.opengraphPublisher
  const opengraphModifiedTime = override?.opengraphModifiedTime

  // Bots and crawlers
  const robotsIndexing =
    (DEFAULTS.followStatus ? 'index' : 'noindex') +
    ' ,' +
    (DEFAULTS.indexStatus ? 'follow' : 'nofollow')

  return (
    <Helmet>
      {/* OPEN GRAPH PROTOCOL TAG REFERENCES - https://ogp.me */}
      {/* HTML Meta Tags*/}
      <title>{title}</title>

      {/* Basic Metadata Tags*/}
      <meta
        name='comment'
        content='---------------------- META TAGS BEGIN ----------------------'
      />
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />

      <meta
        name='comment'
        content='---------------------- OGP Tags for Social Medias ----------------------'
      />
      <meta property='og:title' content={title} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={image} />
      {/* {ogImageWidth && <meta property='og:image:width' content={ogImageWidth} />} */}
      {/* {ogImageHeight && <meta property='og:image:height' content={ogImageHeight} />} */}
      <meta property='og:url' content={url} />

      {/* Supporting Meta Tags */}
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content={title} />

      {/* Articles Meta Tags */}
      <meta name='comment' content='---------------------- Article Tags ----------------------' />
      {author && <meta property='article:author' content={author} />}
      {publishedDate && <meta property='article:published_time' content={publishedDate} />}
      {opengraphPublisher && <meta property='article:publisher' content={opengraphPublisher} />}
      {opengraphModifiedTime && (
        <meta property='article:modified_time' content={opengraphModifiedTime} />
      )}

      {/* Twitter Meta Tags */}
      <meta
        name='comment'
        content='---------------------- Twitter Specific Tags ----------------------'
      />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={image} />
      <meta property='twitter:card' content={twitterCardType} />
      <meta property='twitter:url' content={url} />

      {/* Tags for Bots & Crawlers */}
      <meta
        name='comment'
        content='---------------------- Bots & Crawler Tags ----------------------'
      />
      {/* https://developers.google.com/search/docs/advanced/robots/robots_meta_tag */}
      <meta name='robots' content={robotsIndexing} />
      <meta name='googlebot' content={robotsIndexing} />
      {/* <meta name='AdsBot-Google' content={noIndexStatus} /> */}
      {/* <meta name='googlebot-news' content={noIndexStatus} /> */}

      <meta name='comment' content='---------------------- META TAGS END ----------------------' />

      {/* External React Devtools debugger */}
      {import.meta.env.NODE_ENV === 'development' && <script src='http://localhost:8097' />}

      {/* Google Maps */}
      {/* {import.meta.env.NODE_ENV === 'production' && ( */}
      <script
        id='__google-maps-script'
        src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCBYY-RtAAYnN1w_wAFmsQc2wz0ReCjriI&libraries=places&callback=Function.prototype'></script>
      {/* )} */}

      {import.meta.env.NODE_ENV === 'production' && (
        <>
          {/* Google Tag gtag */}
          <script async src='https://www.googletagmanager.com/gtag/js?id=G-PE58DZJX7J'></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-PE58DZJX7J');
            `}
          </script>
          {/* Google Tag manager */}
          <script>
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N6SK932');
          `}
          </script>
        </>
      )}
    </Helmet>
  )
}

export default Seo
