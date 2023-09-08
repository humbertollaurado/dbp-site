import '@testing-library/angular';
import { VisionComponent } from './vision.component';
import { render, screen } from '@testing-library/angular';

describe(VisionComponent, () => {
  it('should render titles component', async () => {
    await render(VisionComponent);

    expect(
      screen.getByText('Every project starts with one question')
    ).toBeInTheDocument();

    expect(
      screen.getByText('What’s the maximum amount of value we can contribute?')
    ).toBeInTheDocument();

    expect(
      screen.getByText('We build software that builds your bottom line.')
    ).toBeInTheDocument();
  });
  it('should render props containers', async () => {
    await render(VisionComponent);
    const container = screen.getByTestId('container');
    expect(Array.from(container.classList).sort()).toEqual([
      'bg-zinc-800',
      'flex',
      'flex-row',
      'justify-center',
    ]);

    const containerMb = screen.getByTestId('container-mb');
    expect(containerMb.className).toEqual('mb-24');

    const containerTitle = screen.getByTestId('container-title');
    expect(Array.from(containerTitle.classList).sort()).toEqual([
      'grid',
      'justify-items-center',
    ]);

    const containerParrafos = screen.getByTestId('conatiner-parrafos');
    expect(containerParrafos.className).toEqual('flex');

    const containerIzq = screen.getByTestId('container-izq');
    expect(Array.from(containerIzq.classList).sort()).toEqual([
      'flex-1',
      'mt-6',
    ]);

    const containerDer = screen.getByTestId('container-der');
    expect(Array.from(containerDer.classList).sort()).toEqual([
      'flex-1',
      'mt-8',
    ]);
  });
  it('should render props elements', async () => {
    await render(VisionComponent);
    const headed = screen.getByTestId('headed');
    expect(Array.from(headed.classList).sort()).toEqual([
      'mt-24',
      'p-3',
      'pitalic',
      'text-xs',
      'text-zinc-400',
    ]);
    const h2 = screen.getByTestId('h2');
    expect(Array.from(h2.classList).sort()).toEqual([
      'px-44',
      'text-3xl',
      'text-center',
      'text-white',
    ]);

    const h3 = screen.getByTestId('h3');
    expect(Array.from(h3.classList).sort()).toEqual([
      'mb-4',
      'mt-8',
      'mx-8',
      'text-2xl',
      'text-white',
    ]);

    const p1 = screen.getByTestId('p-1');
    expect(Array.from(p1.classList).sort()).toEqual([
      'mx-8',
      'text-white',
      'text-xs',
    ]);

    const p2 = screen.getByTestId('p-2');
    expect(Array.from(p2.classList).sort()).toEqual([
      'mb-4',
      'mr-8',
      'mt-5',
      'text-white',
      'text-xs',
    ]);

    const p3 = screen.getByTestId('p-3');
    expect(Array.from(p3.classList).sort()).toEqual([
      'mb-8',
      'mr-8',
      'text-white',
      'text-xs',
    ]);
    const a = screen.getByTestId('a');
    expect(Array.from(a.classList).sort()).toEqual([
      'm-8',
      'text-white',
      'underline',
    ]);
  });
});
