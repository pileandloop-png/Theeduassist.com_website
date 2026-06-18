export type FormType = 'contact' | 'project' | 'audit';
export type LeadStatus = 'new' | 'reviewed' | 'contacted' | 'qualified' | 'notFit' | 'archived';

export interface BaseLead {
  id?: string;
  formType: FormType;
  fullName: string;
  email: string;
  pageUrl?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  submittedAt: string; // ISO String
  status: LeadStatus;
  source: string;
  turnstileVerified: boolean;
  internalNotes?: string;
}

export interface ContactLead extends BaseLead {
  formType: 'contact';
  company?: string;
  website?: string;
  serviceNeeded?: string;
  message: string;
}

export interface ProjectInquiryLead extends BaseLead {
  formType: 'project';
  company?: string;
  website?: string;
  currentPlatform?: string;
  serviceNeeded?: string;
  projectStage?: string;
  budgetRange?: string;
  timeline?: string;
  projectDetails: string;
}

export interface AuditRequestLead extends BaseLead {
  formType: 'audit';
  websiteOrCourseLink: string;
  platform?: string;
  whatToReview: string;
  mainChallenge: string;
  preferredNextStep: string;
}

export type Lead = ContactLead | ProjectInquiryLead | AuditRequestLead;
