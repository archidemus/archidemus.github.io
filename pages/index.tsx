import { sizes } from 'components/constants'
import Photos from 'components/photos'
import { Size } from 'components/photos/types'
import fs from 'fs'
import sizeOf from 'image-size'
import path from 'path'

const contentWidth = Number(sizes.contentWidth.split('px')[0])
const menuWidth = Number(sizes.menuWidth.split('px')[0])
const gap = sizes.s
const smallPhotoWidth = (contentWidth - (Number(gap.split('px')[0]) * 2)) / 3

export async function getStaticProps() {
  const photosPath = path.join(process.cwd(), 'public', 'photos', 'base')
  const photosFolder = fs.readdirSync(photosPath)
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
      const photoPath = `/photos/base/${photo}`
      const PUBLIC = path.join(photosPath, photo)
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

      return ({
        path: photoPath,
        small: {
          width: smallWidth,
          height: smallHeight,
        },
        big: {
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
