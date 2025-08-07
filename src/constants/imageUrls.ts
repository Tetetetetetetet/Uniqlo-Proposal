// 图片路径常量
export const IMAGE_BASE_URL = '/images_processed'
export const IMAGE_BASE_URL_2 = '/images_processed/products'

// 商品图片路径配置
export const PRODUCT_IMAGES = {
  // 主商品图片
  main: {
    U1234: `${IMAGE_BASE_URL}/U1234.png`,
    U5678: `${IMAGE_BASE_URL}/U5678.png`,
  },

  // 搭配推荐商品图片
  matching: {
    match001: `${IMAGE_BASE_URL_2}/matching/match-001.png`,
    match002: `${IMAGE_BASE_URL_2}/matching/match-002.png`,
    match003: `${IMAGE_BASE_URL_2}/matching/match-003.png`,
    match004: `${IMAGE_BASE_URL_2}/matching/match-004.png`,
  },

  // 相似推荐商品图片
  similar: {
    similar001: `${IMAGE_BASE_URL_2}/similar/similar-001.png`,
    similar002: `${IMAGE_BASE_URL_2}/similar/similar-002.png`,
    similar003: `${IMAGE_BASE_URL_2}/similar/similar-003.png`,
    similar004: `${IMAGE_BASE_URL_2}/similar/similar-004.png`,
    similar005: `${IMAGE_BASE_URL_2}/similar/similar-005.png`,
  },
}
