import '@testing-library/angular';
import { BgVideoComponent } from './bg-video.component';
import { screen, render } from '@testing-library/angular';

describe(BgVideoComponent, () => {
  it('Should render video link', async () => {
    await render(BgVideoComponent);
    const container = screen.getByTestId('container');
    expect(Array.from(container.classList).sort()).toEqual([
      'brightness-50',
      'fixed',
      'h-full',
      'video-container',
      'w-full',
    ]);

    const video = screen.getByTestId('video');
    expect(Array.from(video.classList).sort()).toEqual([
      'absolute',
      'h-full',
      'inset-0',
      'object-cover',
      'w-full',
    ]);

    expect(screen.getByTestId('videoWebm')).toBeInTheDocument();
    expect(screen.getByTestId('videoMp')).toBeInTheDocument();
    expect(screen.getByTestId('videoOgv')).toBeInTheDocument();
  });

  it('Should render text component video', async () => {
    await render(BgVideoComponent);
    const containerText = screen.getByTestId('container-text');
    expect(Array.from(containerText.classList).sort()).toEqual([
      'mt-8',
      'pb-28',
      'pt-20',
      'px-7',
    ]);
    const containerTitle = screen.getByTestId('container-title');
    expect(containerTitle.className).toEqual('mb-6');

    const h1 = screen.getByTestId('h1');
    expect(Array.from(h1.classList).sort()).toEqual([
      'h1',
      'text-7.5xl',
      'text-white',
    ]);

    const h2 = screen.getByTestId('h2');
    expect(Array.from(h2.classList).sort()).toEqual([
      'h1',
      'text-7.5xl',
      'text-white',
    ]);

    const p = screen.getByTestId('p');
    expect(Array.from(p.classList).sort()).toEqual([
      'grid',
      'grid-cols-2',
      'mb-10',
      'text-sm',
      'text-white',
    ]);

    const i = screen.getByTestId('i');
    expect(Array.from(i.classList).sort()).toEqual([
      'p-3',
      'text-sm',
      'text-white',
      'underline',
    ]);
  });
});
