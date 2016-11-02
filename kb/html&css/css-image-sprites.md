## image sprites

https://css-tricks.com/css-sprites/

**bigger background image, smaller element size**

- same `background:#cccccc url("same_url.png") no-repeat`
- different `background-position`


#### background-position
`background-position:x y`
- X: horizontal, left right 
- Y: vertical, top bottom

- 0 0： top left 
- 100% 100% :right bottom cornor

- 50% 0: center top
- 100% 0: right top

- 0 50%: left center
- 0 100%: left bottom

- -X 0: drag left
- 0 -Y: drag up


#### background-size
- contain: as large as possible, all in container
- cover: as large as possible, clipped

#### background-origin
similar as box-sizing, the edge of background