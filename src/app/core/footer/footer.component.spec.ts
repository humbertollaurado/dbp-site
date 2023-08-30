import '@testing-library/angular';
import { FooterComponent } from './footer.component';
import { render, screen } from '@testing-library/angular';

describe(FooterComponent, () => {
  it('Should render component with default props', async () => {
    await render(FooterComponent);
    const footer = screen.getByTestId('footer');
    expect(Array.from(footer.classList).sort()).toEqual([
      'justify-between',
      'md:flex',
    ]);

    const containerLinks = screen.getByTestId('container-links');
    expect(Array.from(containerLinks.classList).sort()).toEqual([
      'flex',
      'justify-between',
      'md:order-last',
      'md:p-12',
      'pt-20',
    ]);

    const containerTemplates = screen.getByTestId('container-templates');
    expect(Array.from(containerTemplates.classList).sort()).toEqual([
      'md:p-10',
      'p-3',
    ]);

    const containerSocial = screen.getByTestId('container-social');
    expect(Array.from(containerSocial.classList).sort()).toEqual([
      'md:p-10',
      'p-3',
    ]);

    const containerInfo = screen.getByTestId('container-info');
    expect(Array.from(containerInfo.classList).sort()).toEqual([
      'items-center',
      'md:p-8',
      'py-12',
    ]);

    expect(screen.getByRole('img')).toBeInTheDocument();
    const img = screen.getByRole('img');
    expect(Array.from(img.classList).sort()).toEqual([
      'md:px-0',
      'md:py-8',
      'p-5',
    ]);

    const pDbp = screen.getByTestId('p-dbp');
    expect(Array.from(pDbp.classList).sort()).toEqual([
      'md:px-0',
      'md:py-4',
      'px-5',
      'text-zinc-400',
    ]);

    const policy = screen.getByTestId('policy');
    expect(Array.from(policy.classList).sort()).toEqual([
      'md:px-0',
      'px-5',
      'text-zinc-400',
      'underline',
    ]);
  });
});
