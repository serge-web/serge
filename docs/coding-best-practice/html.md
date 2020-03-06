[🏠 Docsite home](../index.md) > [Coding best practice home](./index.md)

# HTML (.tsx, .html)

This selection relates to the use of pure HTML. Most HTML will be created in `.tsx` files, however, there may be edge cases where plain `.html` is required (excluding the entry `index.html` page of course).

Please code using standard HTML5. If for any reason you require a custom attribute, please use a data attribute. 

## Acceptable

````html
<section class="magic" data-custom-attr="kinda">
  <span>It's a kinda magic</span>
</section>
````

## Unacceptable

````html
<section class="magic" custom-attr="kinda">
  <span>It's a kinda magic</span>
</section>
````