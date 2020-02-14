import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { By } from "@angular/platform-browser";
import { ProductsComponent } from "./products.component";

describe("ProductsComponent", () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it("should hide ul element if consumption is null or undefined or <= 0", () => {
    const ulElement = fixture.debugElement.query(By.css("ul"));
    expect(ulElement).toBeNull();

    component.consumption = undefined;
    fixture.detectChanges();
    expect(ulElement).toBeNull();

    component.consumption = 0;
    fixture.detectChanges();
    expect(ulElement).toBeNull();

    component.consumption = -1000;
    fixture.detectChanges();
    expect(ulElement).toBeNull();
  });

  it("should show ul element if consumption is not null", () => {
    component.consumption = 4000;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css("ul"))).toBeTruthy();
  });
});
