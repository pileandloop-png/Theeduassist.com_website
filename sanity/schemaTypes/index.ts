// theeduassist/schemaTypes/index.ts
import post from './post'
import author from './author'
import page from './pages'
import service from './services'
import kajabiService from './kajabiServices'
import caseStudy from './caseStudies'
import faq from './faqs'
import platform from './platforms'
import trainingSolution from './trainingSolutions'
import testimonial from './testimonials'
import siteSettings from './siteSettings'

import objects from './objects'
import navigation from './navigation'
import ctaBlock from './ctaBlock'
import process from './process'
import audienceSegment from './audienceSegment'

const schemaTypes = [
	// documents
	page,
	service,
	kajabiService,
	caseStudy,
	post,
	author,
	faq,
	platform,
	trainingSolution,
	testimonial,
	siteSettings,
	// objects
	...objects,
	 // new documents
	 navigation,
	 ctaBlock,
	 process,
	 audienceSegment,
]

export default schemaTypes
