# react-image-select
An Image Select control built with and for React JS


# get started
## install
```javascript
npm install react-image-select
```

## import
```javascript
import ImageSelect from 'react-image-select';
```

## use
```javascript
<ImageSelect
  images={['/images/apple.png', '/images/banana.png', '/images/pear.png']}
  width={20}
  height={20}
  defaultIndex={2} // will select pear.png
  onChange={this._handleChange}/>
```
