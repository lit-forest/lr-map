#lmsg API docs    
---   
### 1.Usage 
Add **lsbridge.min.js** to your page:

```html
<script src="js/lmsg.min.js"></script>
```

There is a global object `lmsg` available.

### 2. Send messages:      

```js
lsbridge.send('my-namespace', { message: 'Hello world!' });
```

### 3. Listen for messages:         

```js
lsbridge.subscribe('my-namespace', function(data) {
  console.log(data); // prints: { message: 'Hello world!'}
});
```

### 4. Cancel listeners for specific namespace:       

```js
lsbridge.unsubscribe('my-namespace');
```    