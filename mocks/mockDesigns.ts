const mockDesignsPart = [
  {
    id: '0',
    title: 'COVR3D - individual Masks V2.08',
    imageUrl: '/mock/COVR3D_V2.08_fit3.jpg',
    voting: 5,
    likes: 4289,
    qualityLevel: 'CE Certified',
    createdBy: 'Think3DDD',
    createdAt: new Date(2020, 2, 25)
  },
  {
    id: '0',
    title: 'Easy Covid-19 emergency mask for hospital ventilators',
    imageUrl: '/mock/COVR3D_V2.08_fit3.jpg',
    voting: 4,
    likes: 2039,
    qualityLevel: 'Reviewed for clinical use',
    createdBy: 'ISINNOVA',
    createdAt: new Date(2020, 2, 30)
  },
  {
    id: '0',
    title: 'Respirator breathing mask with hepa filter',
    imageUrl: '/mock/COVR3D_V2.08_fit3.jpg',
    voting: 3,
    likes: 848,
    qualityLevel: 'Optimized for community use',
    createdBy: '3D-Mon',
    createdAt: new Date(2020, 2, 21)
  }]

export const mockDesigns = [...mockDesignsPart, ...mockDesignsPart, ...mockDesignsPart, ...mockDesignsPart]
  .map((design, i) => ({ ...design, id: i }))
