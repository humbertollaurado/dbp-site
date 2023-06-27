import { AppComponent } from './app.component';
import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';

describe('AppComponent', () => {
  it('should render component whit title', async () => {
    const title = 'This is a title';
    await render(AppComponent, {
      componentProperties: {
        title: title,
      },
    });

    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
