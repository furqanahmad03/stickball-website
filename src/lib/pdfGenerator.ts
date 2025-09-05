import jsPDF from 'jspdf';

interface PDFContent {
  hero: {
    headline1: string;
    headline2: string;
    subheadline: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  methodology: {
    title: string;
    description: string;
    steps: Array<{
      phase: string;
      retention: string;
      description: string;
      features: string[];
    }>;
  };
  whoWeServe: {
    title: string;
    subtitle: string;
    audiences: Array<{
      title: string;
      description: string;
    }>;
  };

  testimonials: {
    title: string;
    subtitle: string;
    items: Array<{
      quote: string;
      author: string;
      title: string;
    }>;
  };
  about: {
    title: string;
    subtitle: string;
    mission: string;
    missionDescription: string;
    coreStrengths: string;
    ourImpact: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    stats: Array<{
      number: string;
      label: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    contactInfo: Array<{
      title: string;
      details: string[];
    }>;
  };
  pressKit: {
    title: string;
    subtitle: string;
  };
}

export class PDFGenerator {
  private doc: jsPDF;
  private currentY: number = 0;
  private pageHeight: number = 0;
  private margin: number = 40;
  private contentWidth: number = 0;
  private primaryColor: string = '#616DED';
  private secondaryColor: string = '#8B5CF6';
  private textColor: string = '#1F2937';
  private lightGray: string = '#6B7280';

  constructor() {
    this.doc = new jsPDF('p', 'mm', 'a4');
    this.pageHeight = this.doc.internal.pageSize.height;
    this.contentWidth = this.doc.internal.pageSize.width - (this.margin * 2);
    this.currentY = this.margin;
  }

  private addHeader(): void {
    // Logo placeholder (you can replace with actual logo)
    this.doc.setFillColor(this.primaryColor);
    this.doc.roundedRect(this.margin, this.margin, this.contentWidth, 20, 3, 3, 'F');
    
    this.doc.setTextColor(255, 255, 255);
    this.doc.setFontSize(24);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('Stickball', this.margin + 10, this.margin + 13);
    
    this.doc.setTextColor(this.textColor);
    this.currentY = this.margin + 35;
  }

  private addSectionTitle(title: string, subtitle?: string): void {
    // Check if we need a new page
    if (this.currentY > this.pageHeight - 60) {
      this.doc.addPage();
      this.currentY = this.margin;
    }

    // Section title
    this.doc.setFontSize(20);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(this.primaryColor);
    this.doc.text(title, this.margin, this.currentY);
    this.currentY += 8;

    // Section subtitle
    if (subtitle) {
      this.doc.setFontSize(12);
      this.doc.setFont('helvetica', 'normal');
      this.doc.setTextColor(this.lightGray);
      const lines = this.doc.splitTextToSize(subtitle, this.contentWidth);
      this.doc.text(lines, this.margin, this.currentY);
      this.currentY += lines.length * 5 + 10;
    } else {
      this.currentY += 15;
    }
  }

  private addHeroSection(content: PDFContent): void {
    this.addSectionTitle(content.pressKit.title, content.pressKit.subtitle);

    // Main headline
    this.doc.setFontSize(28);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(this.textColor);
    this.doc.text(content.hero.headline1, this.margin, this.currentY);
    this.currentY += 8;

    this.doc.setTextColor(this.primaryColor);
    this.doc.text(content.hero.headline2, this.margin, this.currentY);
    this.currentY += 10;

    // Subheadline
    this.doc.setFontSize(14);
    this.doc.setFont('helvetica', 'normal');
    this.doc.setTextColor(this.textColor);
    const subheadlineLines = this.doc.splitTextToSize(content.hero.subheadline, this.contentWidth);
    this.doc.text(subheadlineLines, this.margin, this.currentY);
    this.currentY += subheadlineLines.length * 5 + 10;
  }

  private addFeaturesSection(content: PDFContent['features']): void {
    this.addSectionTitle(content.title, content.subtitle);

    content.items.forEach((feature) => {
      if (this.currentY > this.pageHeight - 40) {
        this.doc.addPage();
        this.currentY = this.margin;
      }

      // Feature title
      this.doc.setFontSize(14);
      this.doc.setFont('helvetica', 'bold');
      this.doc.setTextColor(this.primaryColor);
      this.doc.text(`• ${feature.title}`, this.margin, this.currentY);
      this.currentY += 6;

      // Feature description
      this.doc.setFontSize(11);
      this.doc.setFont('helvetica', 'normal');
      this.doc.setTextColor(this.textColor);
      const descLines = this.doc.splitTextToSize(feature.description, this.contentWidth - 10);
      this.doc.text(descLines, this.margin + 10, this.currentY);
      this.currentY += descLines.length * 5 + 8;
    });

    this.currentY += 10;
  }

  private addMethodologySection(content: PDFContent['methodology']): void {
    this.addSectionTitle('Our Methodology', content.description);

    content.steps.forEach((step) => {
      if (this.currentY > this.pageHeight - 60) {
        this.doc.addPage();
        this.currentY = this.margin;
      }

      // Step title with retention rate
      this.doc.setFontSize(16);
      this.doc.setFont('helvetica', 'bold');
      this.doc.setTextColor(this.primaryColor);
      this.doc.text(step.phase, this.margin, this.currentY);
      
      this.doc.setFontSize(12);
      this.doc.setFont('helvetica', 'normal');
      this.doc.setTextColor(this.secondaryColor);
      this.doc.text(`(${step.retention})`, this.margin + 30, this.currentY);
      this.currentY += 8;

      // Step description
      this.doc.setFontSize(11);
      this.doc.setTextColor(this.textColor);
      const descLines = this.doc.splitTextToSize(step.description, this.contentWidth);
      this.doc.text(descLines, this.margin, this.currentY);
      this.currentY += descLines.length * 5 + 5;

      // Features list
      step.features.forEach((feature) => {
        this.doc.setFontSize(10);
        this.doc.setTextColor(this.lightGray);
        this.doc.text(`  • ${feature}`, this.margin + 10, this.currentY);
        this.currentY += 5;
      });

      this.currentY += 10;
    });
  }

  private addWhoWeServeSection(content: PDFContent['whoWeServe']): void {
    this.addSectionTitle('Who We Serve', content.subtitle);

    content.audiences.forEach((audience) => {
      if (this.currentY > this.pageHeight - 40) {
        this.doc.addPage();
        this.currentY = this.margin;
      }

      // Audience title
      this.doc.setFontSize(14);
      this.doc.setFont('helvetica', 'bold');
      this.doc.setTextColor(this.primaryColor);
      this.doc.text(`• ${audience.title}`, this.margin, this.currentY);
      this.currentY += 6;

      // Audience description
      this.doc.setFontSize(11);
      this.doc.setFont('helvetica', 'normal');
      this.doc.setTextColor(this.textColor);
      const descLines = this.doc.splitTextToSize(audience.description, this.contentWidth - 10);
      this.doc.text(descLines, this.margin + 10, this.currentY);
      this.currentY += descLines.length * 5 + 8;
    });

    this.currentY += 10;
  }



  private addTestimonialsSection(content: PDFContent['testimonials']): void {
    this.addSectionTitle('Testimonials', content.subtitle);

    content.items.forEach((testimonial) => {
      if (this.currentY > this.pageHeight - 60) {
        this.doc.addPage();
        this.currentY = this.margin;
      }

      // Quote
      this.doc.setFontSize(12);
      this.doc.setFont('helvetica', 'italic');
      this.doc.setTextColor(this.textColor);
      const quoteLines = this.doc.splitTextToSize(`"${testimonial.quote}"`, this.contentWidth - 10);
      this.doc.text(quoteLines, this.margin + 5, this.currentY);
      this.currentY += quoteLines.length * 5 + 8;

      // Author info
      this.doc.setFontSize(11);
      this.doc.setFont('helvetica', 'bold');
      this.doc.setTextColor(this.primaryColor);
      this.doc.text(`— ${testimonial.author}`, this.margin, this.currentY);
      this.currentY += 5;

      this.doc.setFontSize(10);
      this.doc.setFont('helvetica', 'normal');
      this.doc.setTextColor(this.lightGray);
      this.doc.text(testimonial.title, this.margin, this.currentY);
      this.currentY += 15;
    });
  }

  private addAboutSection(content: PDFContent['about']): void {
    this.addSectionTitle('About Stickball', content.subtitle);

    // Mission
    this.doc.setFontSize(14);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(this.primaryColor);
    this.doc.text(content.mission, this.margin, this.currentY);
    this.currentY += 8;

    this.doc.setFontSize(11);
    this.doc.setFont('helvetica', 'normal');
    this.doc.setTextColor(this.textColor);
    const missionLines = this.doc.splitTextToSize(content.missionDescription, this.contentWidth);
    this.doc.text(missionLines, this.margin, this.currentY);
    this.currentY += missionLines.length * 5 + 15;

    // Key features
    this.doc.setFontSize(14);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(this.primaryColor);
    this.doc.text(content.coreStrengths, this.margin, this.currentY);
    this.currentY += 8;

    content.features.forEach((feature) => {
      if (this.currentY > this.pageHeight - 40) {
        this.doc.addPage();
        this.currentY = this.margin;
      }

      this.doc.setFontSize(12);
      this.doc.setFont('helvetica', 'bold');
      this.doc.setTextColor(this.textColor);
      this.doc.text(`• ${feature.title}`, this.margin, this.currentY);
      this.currentY += 6;

      this.doc.setFontSize(10);
      this.doc.setFont('helvetica', 'normal');
      this.doc.setTextColor(this.lightGray);
      const descLines = this.doc.splitTextToSize(feature.description, this.contentWidth - 10);
      this.doc.text(descLines, this.margin + 10, this.currentY);
      this.currentY += descLines.length * 5 + 8;
    });

    this.currentY += 10;

    // Impact stats
    this.doc.setFontSize(14);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(this.primaryColor);
    this.doc.text(content.ourImpact, this.margin, this.currentY);
    this.currentY += 8;

    content.stats.forEach((stat, index) => {
      if (this.currentY > this.pageHeight - 30) {
        this.doc.addPage();
        this.currentY = this.margin;
      }

      this.doc.setFontSize(16);
      this.doc.setFont('helvetica', 'bold');
      this.doc.setTextColor(this.secondaryColor);
      this.doc.text(stat.number, this.margin + (index * 40), this.currentY);
      
      this.doc.setFontSize(10);
      this.doc.setFont('helvetica', 'normal');
      this.doc.setTextColor(this.lightGray);
      this.doc.text(stat.label, this.margin + (index * 40), this.currentY + 8);
    });

    this.currentY += 20;
  }

  private addContactSection(content: PDFContent['contact']): void {
    this.addSectionTitle('Contact Information', content.subtitle);

    content.contactInfo.forEach((info) => {
      if (this.currentY > this.pageHeight - 40) {
        this.doc.addPage();
        this.currentY = this.margin;
      }

      // Contact type
      this.doc.setFontSize(12);
      this.doc.setFont('helvetica', 'bold');
      this.doc.setTextColor(this.primaryColor);
      this.doc.text(info.title, this.margin, this.currentY);
      this.currentY += 6;

      // Contact details
      this.doc.setFontSize(10);
      this.doc.setFont('helvetica', 'normal');
      this.doc.setTextColor(this.textColor);
      info.details.forEach((detail) => {
        this.doc.text(detail, this.margin + 10, this.currentY);
        this.currentY += 5;
      });

      this.currentY += 8;
    });
  }

  private addFooter(): void {
    const footerY = this.pageHeight - 20;
    
    this.doc.setFontSize(8);
    this.doc.setFont('helvetica', 'normal');
    this.doc.setTextColor(this.lightGray);
    this.doc.text('Stickball', this.margin, footerY);
    
    const currentDate = new Date().toLocaleDateString();
    this.doc.text(currentDate, this.doc.internal.pageSize.width - this.margin - 20, footerY);
  }

  public generatePDF(content: PDFContent, language: string = 'en'): void {
    // Add header to first page
    this.addHeader();
    
    // Add all sections
    this.addHeroSection(content);
    this.addFeaturesSection(content.features);
    this.addMethodologySection(content.methodology);
    this.addWhoWeServeSection(content.whoWeServe);
    this.addTestimonialsSection(content.testimonials);
    this.addAboutSection(content.about);
    this.addContactSection(content.contact);

    // Add footer to all pages
    const pageCount = this.doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      this.doc.setPage(i);
      this.addFooter();
    }

    // Save the PDF
    const fileName = `Stickball_Press_Kit_${language.toUpperCase()}_${new Date().toISOString().split('T')[0]}.pdf`;
    this.doc.save(fileName);
  }
}

// Helper function to extract content from translations
export function extractContentFromTranslations(t: ((key: string) => string) & { raw: (key: string) => string[] }): PDFContent {
  return {
    hero: {
      headline1: t('hero.headline1'),
      headline2: t('hero.headline2'),
      subheadline: t('hero.subheadline')
    },
    features: {
      title: t('featureTiles.title'),
      subtitle: t('featureTiles.subtitle'),
      items: [
        {
          title: t('featureTiles.features.customizable.title'),
          description: t('featureTiles.features.customizable.description')
        },
        {
          title: t('featureTiles.features.fastDeploy.title'),
          description: t('featureTiles.features.fastDeploy.description')
        },
        {
          title: t('featureTiles.features.anyLanguage.title'),
          description: t('featureTiles.features.anyLanguage.description')
        },
        {
          title: t('featureTiles.features.accessible.title'),
          description: t('featureTiles.features.accessible.description')
        },
        {
          title: t('featureTiles.features.mobileFriendly.title'),
          description: t('featureTiles.features.mobileFriendly.description')
        }
      ]
    },
    methodology: {
      title: t('methodology.title'),
      description: t('methodology.description'),
      steps: [
        {
          phase: t('methodology.steps.learn.phase'),
          retention: t('methodology.steps.learn.retention'),
          description: t('methodology.steps.learn.description'),
          features: t.raw('methodology.steps.learn.features')
        },
        {
          phase: t('methodology.steps.practice.phase'),
          retention: t('methodology.steps.practice.retention'),
          description: t('methodology.steps.practice.description'),
          features: t.raw('methodology.steps.practice.features')
        },
        {
          phase: t('methodology.steps.apply.phase'),
          retention: t('methodology.steps.apply.retention'),
          description: t('methodology.steps.apply.description'),
          features: t.raw('methodology.steps.apply.features')
        }
      ]
    },
    whoWeServe: {
      title: t('whoWeServe.title'),
      subtitle: t('whoWeServe.subtitle'),
      audiences: [
        {
          title: t('whoWeServe.audiences.schools.title'),
          description: t('whoWeServe.audiences.schools.description')
        },
        {
          title: t('whoWeServe.audiences.communities.title'),
          description: t('whoWeServe.audiences.communities.description')
        },
        {
          title: t('whoWeServe.audiences.employers.title'),
          description: t('whoWeServe.audiences.employers.description')
        },
        {
          title: t('whoWeServe.audiences.banks.title'),
          description: t('whoWeServe.audiences.banks.description')
        },
        {
          title: t('whoWeServe.audiences.sponsors.title'),
          description: t('whoWeServe.audiences.sponsors.description')
        }
      ]
    },

    testimonials: {
      title: t('testimonials.title'),
      subtitle: t('testimonials.subtitle'),
      items: [
        {
          quote: t('testimonials.items.alfred.quote'),
          author: 'Alfred Daviso, Ph.D',
          title: t('testimonials.items.alfred.title')
        },
        {
          quote: t('testimonials.items.jenn.quote'),
          author: 'Dr. Jenn Chmiel',
          title: t('testimonials.items.jenn.title')
        }
      ]
    },
    about: {
      title: t('about.title'),
      subtitle: t('about.subtitle'),
      mission: t('about.mission'),
      missionDescription: t('about.missionDescription'),
      coreStrengths: t('about.coreStrengths'),
      ourImpact: t('about.measurableImpact'),
      features: [
        {
          title: t('about.features.educationTechnology.title'),
          description: t('about.features.educationTechnology.description')
        },
        {
          title: t('about.features.communityCentered.title'),
          description: t('about.features.communityCentered.description')
        },
        {
          title: t('about.features.multiLanguage.title'),
          description: t('about.features.multiLanguage.description')
        },
        {
          title: t('about.features.personalizedLearning.title'),
          description: t('about.features.personalizedLearning.description')
        },
        {
          title: t('about.features.inclusiveDesign.title'),
          description: t('about.features.inclusiveDesign.description')
        },
        {
          title: t('about.features.fastImplementation.title'),
          description: t('about.features.fastImplementation.description')
        }
      ],
      stats: [
        {
          number: '10+',
          label: t('about.stats.statesServed')
        },
        {
          number: '1000+',
          label: t('about.stats.learnersImpacted')
        },
        {
          number: '50+',
          label: t('about.stats.communityPartners')
        },
        {
          number: '95%',
          label: t('about.stats.satisfactionRate')
        }
      ]
    },
    contact: {
      title: t('contact.title'),
      subtitle: t('contact.subtitle'),
      contactInfo: [
        {
          title: t('contact.contactInfo.callUs.title'),
          details: t.raw('contact.contactInfo.callUs.details')
        },
        {
          title: t('contact.contactInfo.visitUs.title'),
          details: t.raw('contact.contactInfo.visitUs.details')
        },
        {
          title: t('contact.contactInfo.responseTime.title'),
          details: t.raw('contact.contactInfo.responseTime.details')
        }
      ]
    },
    pressKit: {
      title: 'Press Kit',
      subtitle: 'Stickball - Lessons that Stick. Impact that Lasts.'
    }
  };
}
