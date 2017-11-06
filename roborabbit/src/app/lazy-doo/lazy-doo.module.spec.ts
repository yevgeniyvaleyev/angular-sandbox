import { LazyDooModule } from './lazy-doo.module';

describe('LazyDooModule', () => {
  let lazyDooModule: LazyDooModule;

  beforeEach(() => {
    lazyDooModule = new LazyDooModule();
  });

  it('should create an instance', () => {
    expect(lazyDooModule).toBeTruthy();
  });
});
