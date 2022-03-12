# What I learned?
## scss
### mixin
mixin은 스타일 시트에서 재사용할 css 선언 그룹을 정의하는 기능이다.
선언은 `@mixin` 지시어를 이용한다.
```scss
@mixin flex($align-item, $justify-content) {
    display: flex;
    align-items: $align-item;
    justify-content: $justify-content;
}
```
### include
선언된 mixin을 사용하기 위해서는 include 지시어를 사용한다. 
include 지시어는 `@include`로 사용할 수 있다.
```scss
.movie-content {
    @include flex(flex-start, flex-start);
    max-width: 1260px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -200px;
    position: relative;
    padding: 0 2rem;
}
```
### use
use를 사용하여 다른 스타일시트들로 부터 variables, function, mixin 등을 가져올 수 있다. 또한, 여러 스타일 시트를 하나로 합칠 수 있다.
`@use`로 사용하며 사용법은 아래와 같다.
```scss
// 'detail.scss'
// scss 폴더의 '_index.scss'에 있는 모든 것들을 가져옴
@use './scss/' as *;

.banner {
	...
    &::before {
        ...
        @include overlay();
    }

    &::after {
    	...
	    background-image: linear-gradient(to top, $body-bg, rgba($black, 0));
    }
}
```
하지만 `@use`는 중첩되게 되면 최상단 파일에서 최하단 파일을 불러올 수 없다. 
```scss
// _button.scss
	$padding1 : 1rem;
   	
// _box.scss
	@use 'button'
    
    .boxButton{
    	padding: button.$padding; // 1rem
    }
// _container.scss
	@use 'box'
    
    .containerButton{
    	padding: button.$padding; // ???
    }
```

### forward
위와 같은 문제를 해결하기 위해 forward 기능이 나왔다. `@forward` 키워드를 이용하여 사용한다.
```scss
// _button.scss
	$padding1 : 1rem;
   	
// _box.scss
	@forward 'button'
    
    .boxButton{
    	padding: button.$padding; // 1rem
    }
// _container.scss
	@use 'box'
    
    .containerButton{
    	padding: button.$padding; // 1rem;
    }
```
`@forward`키워드는 해당 파일을 복사해 현재 위치에 재생성하는 기능을 가졌다. 이를 통해 `container.scss`에서 `@use`를 이용해 불러온 box 파일 안에는 재생성된 button 파일의 코드가 존재하기 때문에 초기에 할당하였던 1rem이 잘 적용된다.


### parameter
mixin은 함수처럼 매개변수(parameter)를 가질 수 있다.
하나의 mixin으로 여러 결과를 만들 수 있어 코드의 반복을 줄일 수 있다.
```scss
@mixin 믹스인이름($파라미터, $파라미터) {
    스타일
}
```
mixin 함수의 파라미터 사용 방식은 위와 같다.

```scss
@mixin flex($align-item, $justify-content) {
    display: flex;
    align-items: $align-item;
    justify-content: $justify-content;
}
```
mixin을 파라미터를 이용하여 선언하고 이를 아래와 같이 `@include`를 이용하여 인수(argument)를 전달하여 사용한다.
```scss
.movie-content {
    @include 믹스인이름(인수, 인수);
}
```
실 사용은 아래와 같고 프로젝트에서 mixin을 `_mixin.scss` 파일을 따로 만들어 관리하였다.
```scss
.movie-content {
    @include flex(flex-start, flex-start);
    max-width: 1260px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -200px;
    position: relative;
    padding: 0 2rem;
}
```
### variables
반복적으로 사용되는 값을 변수로 지정할 수 있다.
변수 앞에는 `$`를 붙인다.
```
$변수이름: 속성값
```

실 사용은 아래와 같고 프로젝트에서 `_variables.scss` 파일을 따로 만들어서 변수를 관리하였다.
```scss
// '_variables.scss'
$white: #fff;
$black: #000;

```
