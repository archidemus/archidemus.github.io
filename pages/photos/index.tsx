import { sizes } from 'components/constants'
import Photos from 'components/photos'
import { Size } from 'components/photos/types'
import fs from 'fs'
import sizeOf from 'image-size'
import sharp from 'sharp'

const contentWidth = Number(sizes.contentWidth.split('px')[0])
const menuWidth = Number(sizes.menuWidth.split('px')[0])
const gap = sizes.s
const smallPhotoWidth = (contentWidth - (Number(gap.split('px')[0]) * 2)) / 3

export async function getStaticProps() {
  const photosFolder = fs.readdirSync('public/photos/base')
  const optimizedSize = ({ width, height }: Size, maxPhotoWidth: number) => {
    const ratioWidth = maxPhotoWidth / width
    const ratioHeight = maxPhotoWidth / height
    const ratio = ratioHeight > ratioWidth ? ratioWidth : ratioHeight
    return {
      width: Math.trunc(width * ratio),
      height: Math.trunc(height * ratio),
    }
  }
  const photos = photosFolder
    .filter((photo) => photo.includes('.jp'))
    .map((photo) => {
      const PUBLIC = `public/photos/base/${photo}`
      const PUBLIC_SMALL = `public/photos/small/${photo}`
      const PUBLIC_BIG = `public/photos/big/${photo}`
      const size = sizeOf(PUBLIC)
      const {
        width: smallWidth,
        height: smallHeight,
      } = optimizedSize({
        width: Number(size.width),
        height: Number(size.height),
      }, smallPhotoWidth)
      const {
        width: bigWidth,
        height: bigHeight,
      } = optimizedSize({
        width: Number(size.width),
        height: Number(size.height),
      }, menuWidth)
      if (!fs.existsSync(PUBLIC_SMALL)) {
        sharp(PUBLIC)
          .resize(smallWidth, smallHeight)
          .toFile(PUBLIC_SMALL)
      }
      if (!fs.existsSync(PUBLIC_BIG)) {
        sharp(PUBLIC)
          .resize(bigWidth, bigHeight)
          .toFile(PUBLIC_BIG)
      }

      return ({
        small: {
          path: `/photos/small/${photo}`,
          width: smallWidth,
          height: smallHeight,
        },
        big: {
          path: `/photos/big/${photo}`,
          width: bigWidth,
          height: bigHeight,
        },
      })
    })

  return {
    props: {
      photos,
    },
  }
}

export default Photos
