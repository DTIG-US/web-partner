import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartnersComponent } from './partners.component';
import * as siteData from '../../data.json';

describe('PartnersComponent', () => {
  let component: PartnersComponent;
  let fixture: ComponentFixture<PartnersComponent>;
  let host: HTMLElement;

  const partners = (siteData as any).default.partners as Array<{
    name: string;
    url: string;
    image: string;
  }>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartnersComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  // ── Smoke ────────────────────────────────────────────────────────────────

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ── Data wiring ──────────────────────────────────────────────────────────

  it('should render exactly as many partner cards as data.json partners', () => {
    const cards = host.querySelectorAll('.partner-card');
    expect(cards.length).toBe(partners.length);
  });

  it('should render each partner card with the correct href', () => {
    const cards = host.querySelectorAll<HTMLAnchorElement>('.partner-card');
    cards.forEach((card, i) => {
      expect(card.getAttribute('href')).toBe(partners[i].url);
    });
  });

  it('should render each partner logo with src matching data', () => {
    const imgs = host.querySelectorAll<HTMLImageElement>('.partner-logo');
    imgs.forEach((img, i) => {
      expect(img.getAttribute('src')).toBe(partners[i].image);
    });
  });

  // ── Accessibility ────────────────────────────────────────────────────────

  it('should set aria-label on each partner card to the partner name', () => {
    const cards = host.querySelectorAll<HTMLAnchorElement>('.partner-card');
    cards.forEach((card, i) => {
      expect(card.getAttribute('aria-label')).toBe(partners[i].name);
    });
  });

  it('should set descriptive alt text on each partner logo', () => {
    const imgs = host.querySelectorAll<HTMLImageElement>('.partner-logo');
    imgs.forEach((img, i) => {
      expect(img.getAttribute('alt')).toBe(`${partners[i].name} logo`);
    });
  });

  it('should open partner links in a new tab', () => {
    const cards = host.querySelectorAll<HTMLAnchorElement>('.partner-card');
    cards.forEach((card) => {
      expect(card.getAttribute('target')).toBe('_blank');
    });
  });

  it('should add rel="noopener noreferrer" to all partner links (security)', () => {
    // Prevents the opened tab from accessing window.opener on the parent page.
    const cards = host.querySelectorAll<HTMLAnchorElement>('.partner-card');
    cards.forEach((card) => {
      const rel = card.getAttribute('rel') ?? '';
      expect(rel).toContain('noopener');
      expect(rel).toContain('noreferrer');
    });
  });
});


