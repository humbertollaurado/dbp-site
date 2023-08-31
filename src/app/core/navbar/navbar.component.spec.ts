import '@testing-library/angular';
import { NavbarComponent } from './navbar.component';
import { fireEvent, render, screen } from '@testing-library/angular';

describe(NavbarComponent, () => {
  it('should render component with default props', async () => {
    await render(NavbarComponent);
    expect(screen.getByTestId('navbar')).toBeTruthy();

    const nav = screen.getByTestId('navbar');
    expect(nav.className).toEqual('bg-transparent');

    expect(screen.getByTestId('DBP-logo-horizontal')).toBeInTheDocument();

    const container = screen.getByTestId('container');
    expect(Array.from(container.classList).sort()).toEqual([
      'flex',
      'justify-between',
      'p-2',
    ]);

    const containerLogo = screen.getByTestId('container-logo');
    expect(containerLogo.className).toEqual('items-center');

    const button = screen.getByRole('button');
    expect(Array.from(button.classList).sort()).toEqual([
      'lg:hidden',
      'text-white',
    ]);

    const ul = screen.getByTestId('ul');
    expect(Array.from(ul.classList).sort()).toEqual([
      'hidden',
      'lg:flex',
      'lg:items-center',
      'lg:justify-end',
      'p-8',
    ]);

    const services = screen.getByTestId('services');
    expect(Array.from(services.classList).sort()).toEqual([
      'px-3',
      'rounded-md',
      'text-white',
    ]);

    const caseStudies = screen.getByTestId('case-studies');
    expect(Array.from(caseStudies.classList).sort()).toEqual([
      'px-3',
      'rounded-md',
      'text-white',
    ]);

    const insights = screen.getByTestId('insights');
    expect(Array.from(insights.classList).sort()).toEqual([
      'px-3',
      'rounded-md',
      'text-white',
    ]);

    const aboutUs = screen.getByTestId('about-us');
    expect(Array.from(aboutUs.classList).sort()).toEqual([
      'px-3',
      'rounded-md',
      'text-white',
    ]);

    const letsTalk = screen.getByTestId('lets-talk');
    expect(Array.from(letsTalk.classList).sort()).toEqual([
      'border-2',
      'border-white',
      'hover:bg-white',
      'hover:text-black',
      'm-3',
      'px-6',
      'py-2',
      'rounded-full',
      'text-white',
    ]);
  });
  it('render', async () => {
    await render(NavbarComponent);
    fireEvent.click(screen.getByRole('button'));

    const ulResponsive = screen.getByTestId('ul-responsive');
    expect(Array.from(ulResponsive.classList).sort()).toEqual([
      'bg-zinc-800',
      'lg:hidden',
      'px-2',
      'w-full',
    ]);

    const servicesResponsive = screen.getByTestId('services-responsive');
    expect(Array.from(servicesResponsive.classList).sort()).toEqual([
      'block',
      'px-3',
      'py-2',
      'rounded-md',
      'text-white',
    ]);

    const caseStudiesResponsive = screen.getByTestId('case-studies-responsive');
    expect(Array.from(caseStudiesResponsive.classList).sort()).toEqual([
      'block',
      'px-3',
      'py-2',
      'rounded-md',
      'text-white',
    ]);

    const insightsResponsive = screen.getByTestId('insights-responsive');
    expect(Array.from(insightsResponsive.classList).sort()).toEqual([
      'block',
      'px-3',
      'py-2',
      'rounded-md',
      'text-white',
    ]);

    const aboutUsResponsive = screen.getByTestId('about-us-responsive');
    expect(Array.from(aboutUsResponsive.classList).sort()).toEqual([
      'block',
      'px-3',
      'py-2',
      'rounded-md',
      'text-white',
    ]);

    const letsTalkResponsive = screen.getByTestId('lets-talk-responsive');
    expect(Array.from(letsTalkResponsive.classList).sort()).toEqual([
      'block',
      'px-3',
      'py-2',
      'text-white',
    ]);

    expect(screen.getByTestId('DBP-logo')).toBeInTheDocument();
  });
});
