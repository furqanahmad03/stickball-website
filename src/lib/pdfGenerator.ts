import jsPDF from 'jspdf';

interface PDFContent {
  hero: {
    headline1: string;
    headline2: string;
    subheadline: string;
    ctaButton: string;
  };
  features: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaButton: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  whoWeServe: {
    audience: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
    audiences: Array<{
      title: string;
      description: string;
    }>;
  };
  testimonials: {
    title: string;
    subtitle: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
    items: Array<{
      quote: string;
      author: string;
      title: string;
    }>;
  };
  methodology: {
    title: string;
    subtitle: string;
    description: string;
    steps: Array<{
      phase: string;
      retention: string;
      description: string;
      features: string[];
    }>;
  };
  about: {
    title: string;
    subtitle: string;
    mission: string;
    missionDescription: string;
    coreStrengths: string;
    measurableImpact: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    stats: Array<{
      number: string;
      label: string;
    }>;
  };
}

export class PDFGenerator {
  private doc: jsPDF;
  private currentY: number = 0;
  private pageHeight: number = 0;
  private margin: number = 25; // Reduced margin for more content
  private contentWidth: number = 0;
  private primaryColor: string = '#616DED';
  private secondaryColor: string = '#8B5CF6';
  private textColor: string = '#1F2937';
  private lightGray: string = '#6B7280';
  private lineHeight: number = 1.4;

  constructor() {
    this.doc = new jsPDF('p', 'mm', 'a4');
    this.pageHeight = this.doc.internal.pageSize.height;
    this.contentWidth = this.doc.internal.pageSize.width - (this.margin * 2);
    this.currentY = this.margin;
  }

  private addHeader(): void {
    // Logo placeholder
    this.doc.setFillColor(this.primaryColor);
    this.doc.roundedRect(this.margin, this.margin, this.contentWidth, 15, 2, 2, 'F');
    
    this.doc.setTextColor(255, 255, 255);
    this.doc.setFontSize(18);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('Stickball', this.margin + 8, this.margin + 10);
    
    this.doc.setTextColor(this.textColor);
    this.currentY = this.margin + 25;
  }

  private addSectionTitle(title: string, subtitle?: string): void {
    // Check if we need a new page
    if (this.currentY > this.pageHeight - 50) {
      this.doc.addPage();
      this.currentY = this.margin;
    }

    // Add space before section
    this.currentY += 8;

    // Section title
    this.doc.setFontSize(16);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(this.primaryColor);
    this.doc.text(title, this.margin, this.currentY);
    this.currentY += 6;

    // Section subtitle
    if (subtitle) {
      this.doc.setFontSize(10);
      this.doc.setFont('helvetica', 'normal');
      this.doc.setTextColor(this.lightGray);
      const lines = this.doc.splitTextToSize(subtitle, this.contentWidth);
      this.doc.text(lines, this.margin, this.currentY);
      this.currentY += lines.length * 4;
    } else {
      this.currentY += 6;
    }

    // Add separator line
    this.doc.setDrawColor(this.lightGray);
    this.doc.setLineWidth(0.5);
    this.doc.line(this.margin, this.currentY, this.margin + this.contentWidth, this.currentY);
    this.currentY += 8;
  }

  private addHeroSection(content: PDFContent): void {
    // Main headline
    this.doc.setFontSize(20);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(this.textColor);
    this.doc.text(content.hero.headline1, this.margin, this.currentY);
    this.currentY += 6;

    this.doc.setTextColor(this.primaryColor);
    this.doc.text(content.hero.headline2, this.margin, this.currentY);
    this.currentY += 8;

    // Subheadline
    this.doc.setFontSize(11);
    this.doc.setFont('helvetica', 'normal');
    this.doc.setTextColor(this.textColor);
    const subheadlineLines = this.doc.splitTextToSize(content.hero.subheadline, this.contentWidth);
    this.doc.text(subheadlineLines, this.margin, this.currentY);
    this.currentY += subheadlineLines.length * 4;
  }

  private addFeaturesSection(content: PDFContent['features']): void {
    this.addSectionTitle(content.title, content.subtitle);

    content.items.forEach((feature, index) => {
      if (this.currentY > this.pageHeight - 30) {
        this.doc.addPage();
        this.currentY = this.margin;
      }

      // Feature title
      this.doc.setFontSize(12);
      this.doc.setFont('helvetica', 'bold');
      this.doc.setTextColor(this.primaryColor);
      this.doc.text(`${index + 1}. ${feature.title}`, this.margin, this.currentY);
      this.currentY += 5;

      // Feature description
      this.doc.setFontSize(9);
      this.doc.setFont('helvetica', 'normal');
      this.doc.setTextColor(this.textColor);
      const descLines = this.doc.splitTextToSize(feature.description, this.contentWidth - 8);
      this.doc.text(descLines, this.margin + 8, this.currentY);
      this.currentY += descLines.length * 3.5 + 4;
    });
  }

  private addWhoWeServeSection(content: PDFContent['whoWeServe']): void {
    this.addSectionTitle(`${content.audience} - ${content.title} ${content.titleHighlight}`, content.subtitle);

    content.audiences.forEach((audience, index) => {
      if (this.currentY > this.pageHeight - 30) {
        this.doc.addPage();
        this.currentY = this.margin;
      }

      // Audience title
      this.doc.setFontSize(12);
      this.doc.setFont('helvetica', 'bold');
      this.doc.setTextColor(this.primaryColor);
      this.doc.text(`${index + 1}. ${audience.title}`, this.margin, this.currentY);
      this.currentY += 5;

      // Audience description
      this.doc.setFontSize(9);
      this.doc.setFont('helvetica', 'normal');
      this.doc.setTextColor(this.textColor);
      const descLines = this.doc.splitTextToSize(audience.description, this.contentWidth - 8);
      this.doc.text(descLines, this.margin + 8, this.currentY);
      this.currentY += descLines.length * 3.5 + 6;
    });

    this.currentY += 8;
  }

  private addTestimonialsSection(content: PDFContent['testimonials']): void {
    this.addSectionTitle(content.title, content.subtitle);

    content.items.forEach((testimonial) => {
      if (this.currentY > this.pageHeight - 40) {
        this.doc.addPage();
        this.currentY = this.margin;
      }

      // Quote
      this.doc.setFontSize(10);
      this.doc.setFont('helvetica', 'italic');
      this.doc.setTextColor(this.textColor);
      const quoteLines = this.doc.splitTextToSize(`"${testimonial.quote}"`, this.contentWidth - 8);
      this.doc.text(quoteLines, this.margin + 4, this.currentY);
      this.currentY += quoteLines.length * 3.5 + 6;

      // Author info
      this.doc.setFontSize(9);
      this.doc.setFont('helvetica', 'bold');
      this.doc.setTextColor(this.primaryColor);
      this.doc.text(`— ${testimonial.author}`, this.margin, this.currentY);
      this.currentY += 4;

      this.doc.setFontSize(8);
      this.doc.setFont('helvetica', 'normal');
      this.doc.setTextColor(this.lightGray);
      this.doc.text(testimonial.title, this.margin, this.currentY);
    this.currentY += 10;
    });
  }

  private addMethodologySection(content: PDFContent['methodology']): void {
    this.addSectionTitle(content.title, content.description);

    content.steps.forEach((step) => {
      if (this.currentY > this.pageHeight - 40) {
        this.doc.addPage();
        this.currentY = this.margin;
      }

      // Step title with retention rate
      this.doc.setFontSize(13);
      this.doc.setFont('helvetica', 'bold');
      this.doc.setTextColor(this.primaryColor);
      this.doc.text(step.phase, this.margin, this.currentY);
      
      this.doc.setFontSize(10);
      this.doc.setFont('helvetica', 'normal');
      this.doc.setTextColor(this.secondaryColor);
      this.doc.text(`(${step.retention})`, this.margin + 25, this.currentY);
      this.currentY += 6;

      // Step description
      this.doc.setFontSize(9);
      this.doc.setTextColor(this.textColor);
      const descLines = this.doc.splitTextToSize(step.description, this.contentWidth);
      this.doc.text(descLines, this.margin, this.currentY);
      this.currentY += descLines.length * 3.5 + 4;

      // Features list
      step.features.forEach((feature) => {
        this.doc.setFontSize(8);
        this.doc.setTextColor(this.lightGray);
        this.doc.text(`  • ${feature}`, this.margin + 8, this.currentY);
        this.currentY += 3.5;
      });

      this.currentY += 8;
    });
  }

  private addAboutSection(content: PDFContent['about']): void {
    this.addSectionTitle(content.title, content.subtitle);

    // Mission
    this.doc.setFontSize(12);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(this.primaryColor);
    this.doc.text(content.mission, this.margin, this.currentY);
    this.currentY += 6;

    this.doc.setFontSize(9);
    this.doc.setFont('helvetica', 'normal');
    this.doc.setTextColor(this.textColor);
    const missionLines = this.doc.splitTextToSize(content.missionDescription, this.contentWidth);
    this.doc.text(missionLines, this.margin, this.currentY);
    this.currentY += missionLines.length * 3.5 + 10;

    // Key features
    this.doc.setFontSize(12);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(this.primaryColor);
    this.doc.text(content.coreStrengths, this.margin, this.currentY);
    this.currentY += 6;

    content.features.forEach((feature) => {
      if (this.currentY > this.pageHeight - 30) {
        this.doc.addPage();
        this.currentY = this.margin;
      }

      this.doc.setFontSize(10);
      this.doc.setFont('helvetica', 'bold');
      this.doc.setTextColor(this.textColor);
      this.doc.text(`• ${feature.title}`, this.margin, this.currentY);
      this.currentY += 4;

      this.doc.setFontSize(8);
      this.doc.setFont('helvetica', 'normal');
      this.doc.setTextColor(this.lightGray);
      const descLines = this.doc.splitTextToSize(feature.description, this.contentWidth - 8);
      this.doc.text(descLines, this.margin + 8, this.currentY);
      this.currentY += descLines.length * 3.5 + 6;
    });

    this.currentY += 8;

    // Impact stats
    this.doc.setFontSize(12);
    this.doc.setFont('helvetica', 'bold');
    this.doc.setTextColor(this.primaryColor);
    this.doc.text(content.measurableImpact, this.margin, this.currentY);
    this.currentY += 6;

    content.stats.forEach((stat, index) => {
      if (this.currentY > this.pageHeight - 20) {
        this.doc.addPage();
        this.currentY = this.margin;
      }

      this.doc.setFontSize(14);
      this.doc.setFont('helvetica', 'bold');
      this.doc.setTextColor(this.secondaryColor);
      this.doc.text(stat.number, this.margin + (index * 35), this.currentY);
      
      this.doc.setFontSize(8);
      this.doc.setFont('helvetica', 'normal');
      this.doc.setTextColor(this.lightGray);
      this.doc.text(stat.label, this.margin + (index * 35), this.currentY + 6);
    });

    this.currentY += 15;
  }

  private addFooter(): void {
    const footerY = this.pageHeight - 15;
    
    this.doc.setFontSize(7);
    this.doc.setFont('helvetica', 'normal');
    this.doc.setTextColor(this.lightGray);
    this.doc.text('Stickball', this.margin, footerY);
    
    const currentDate = new Date().toLocaleDateString();
    this.doc.text(currentDate, this.doc.internal.pageSize.width - this.margin - 15, footerY);
  }

  public generatePDF(content: PDFContent, language: string = 'en'): void {
    // Add header to first page
    this.addHeader();
    
    // Add all sections
    this.addHeroSection(content);
    this.addFeaturesSection(content.features);
    this.addWhoWeServeSection(content.whoWeServe);
    this.addTestimonialsSection(content.testimonials);
    this.addMethodologySection(content.methodology);
    this.addAboutSection(content.about);

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
      subheadline: t('hero.subheadline'),
      ctaButton: t('hero.ctaButton')
    },
    features: {
      title: t('featureTiles.title'),
      subtitle: t('featureTiles.subtitle'),
      ctaText: t('featureTiles.ctaText'),
      ctaButton: t('featureTiles.ctaButton'),
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
    whoWeServe: {
      audience: t('whoWeServe.audience'),
      title: t('whoWeServe.title'),
      titleHighlight: t('whoWeServe.titleHighlight'),
      subtitle: t('whoWeServe.subtitle'),
      ctaTitle: t('whoWeServe.ctaTitle'),
      ctaDescription: t('whoWeServe.ctaDescription'),
      ctaButton: t('whoWeServe.ctaButton'),
      audiences: [
        {
          title: t('whoWeServe.audiences.financialLiteracy.title'),
          description: t('whoWeServe.audiences.financialLiteracy.description')
        },
        {
          title: t('whoWeServe.audiences.workforceReadiness.title'),
          description: t('whoWeServe.audiences.workforceReadiness.description')
        },
        {
          title: t('whoWeServe.audiences.healthcare101.title'),
          description: t('whoWeServe.audiences.healthcare101.description')
        },
        {
          title: t('whoWeServe.audiences.communityWellness.title'),
          description: t('whoWeServe.audiences.communityWellness.description')
        },
        {
          title: t('whoWeServe.audiences.aiLiteracy.title'),
          description: t('whoWeServe.audiences.aiLiteracy.description')
        }
      ]
    },
    testimonials: {
      title: 'Testimonials',
      subtitle: 'What Our Partners Say',
      ctaTitle: t('testimonials.ctaTitle'),
      ctaDescription: t('testimonials.ctaDescription'),
      ctaButton: t('testimonials.ctaButton'),
      items: [
        {
          quote: t('testimonials.items.alfred.quote'),
          author: t('testimonials.items.alfred.author'),
          title: t('testimonials.items.alfred.title')
        },
        {
          quote: t('testimonials.items.jenn.quote'),
          author: t('testimonials.items.jenn.author'),
          title: t('testimonials.items.jenn.title')
        },
        {
          quote: t('testimonials.items.nathan.quote'),
          author: t('testimonials.items.nathan.author'),
          title: t('testimonials.items.nathan.title')
        }
      ]
    },
    methodology: {
      title: t('methodology.title'),
      subtitle: t('methodology.approach'),
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
    about: {
      title: t('about.title'),
      subtitle: t('about.subtitle'),
      mission: t('about.mission'),
      missionDescription: t('about.missionDescription'),
      coreStrengths: t('about.coreStrengths'),
      measurableImpact: t('about.measurableImpact'),
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
    }
  };
}