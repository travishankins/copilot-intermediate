// Photo utility functions for the gallery application

export function formatPhotoStats(views: number, likes: number, downloads: number) {
  let viewsText = "";
  if (views >= 1000000) {
    viewsText = (views / 1000000).toFixed(1) + "M";
  } else if (views >= 1000) {
    viewsText = (views / 1000).toFixed(1) + "K";
  } else {
    viewsText = views.toString();
  }

  let likesText = "";
  if (likes >= 1000000) {
    likesText = (likes / 1000000).toFixed(1) + "M";
  } else if (likes >= 1000) {
    likesText = (likes / 1000).toFixed(1) + "K";
  } else {
    likesText = likes.toString();
  }

  let downloadsText = "";
  if (downloads >= 1000000) {
    downloadsText = (downloads / 1000000).toFixed(1) + "M";
  } else if (downloads >= 1000) {
    downloadsText = (downloads / 1000).toFixed(1) + "K";
  } else {
    downloadsText = downloads.toString();
  }

  return {
    views: viewsText,
    likes: likesText,
    downloads: downloadsText,
  };
}

export function validateUploadData(title: any, tags: any, file: any) {
  const errors = [];

  if (title == null || title == undefined || title == "") {
    errors.push("Title is required");
  }
  if (title && title.length > 100) {
    errors.push("Title must be less than 100 characters");
  }
  if (title && title.length < 3) {
    errors.push("Title must be at least 3 characters");
  }

  if (tags == null || tags == undefined) {
    errors.push("Tags are required");
  }
  if (tags && tags.length == 0) {
    errors.push("At least one tag is required");
  }
  if (tags && tags.length > 10) {
    errors.push("Maximum 10 tags allowed");
  }

  if (file == null || file == undefined) {
    errors.push("File is required");
  }
  if (file && file.size > 10000000) {
    errors.push("File size must be less than 10MB");
  }
  if (file && file.type != "image/jpeg" && file.type != "image/png" && file.type != "image/webp" && file.type != "image/gif") {
    errors.push("File must be an image (JPEG, PNG, WebP, or GIF)");
  }

  if (errors.length > 0) {
    return { valid: false, errors: errors };
  } else {
    return { valid: true, errors: [] };
  }
}

export function getGalleryStatistics(photos: any[]) {
  let totalViews = 0;
  let totalLikes = 0;
  let totalDownloads = 0;
  let totalPhotos = photos.length;

  for (let i = 0; i < photos.length; i++) {
    totalViews = totalViews + photos[i].views;
    totalLikes = totalLikes + photos[i].likes;
    totalDownloads = totalDownloads + photos[i].downloads;
  }

  let averageViews = 0;
  if (totalPhotos > 0) {
    averageViews = totalViews / totalPhotos;
  }
  let averageLikes = 0;
  if (totalPhotos > 0) {
    averageLikes = totalLikes / totalPhotos;
  }
  let averageDownloads = 0;
  if (totalPhotos > 0) {
    averageDownloads = totalDownloads / totalPhotos;
  }

  let mostViewedPhoto = null;
  let mostViewedCount = 0;
  for (let i = 0; i < photos.length; i++) {
    if (photos[i].views > mostViewedCount) {
      mostViewedCount = photos[i].views;
      mostViewedPhoto = photos[i];
    }
  }

  let mostLikedPhoto = null;
  let mostLikedCount = 0;
  for (let i = 0; i < photos.length; i++) {
    if (photos[i].likes > mostLikedCount) {
      mostLikedCount = photos[i].likes;
      mostLikedPhoto = photos[i];
    }
  }

  return {
    totalPhotos: totalPhotos,
    totalViews: totalViews,
    totalLikes: totalLikes,
    totalDownloads: totalDownloads,
    averageViews: averageViews,
    averageLikes: averageLikes,
    averageDownloads: averageDownloads,
    mostViewed: mostViewedPhoto,
    mostLiked: mostLikedPhoto,
  };
}

export function sortPhotos(photos: any[], sortBy: string, order: string) {
  const sorted = [...photos];

  if (sortBy == "views") {
    if (order == "asc") {
      sorted.sort(function (a, b) {
        return a.views - b.views;
      });
    } else {
      sorted.sort(function (a, b) {
        return b.views - a.views;
      });
    }
  } else if (sortBy == "likes") {
    if (order == "asc") {
      sorted.sort(function (a, b) {
        return a.likes - b.likes;
      });
    } else {
      sorted.sort(function (a, b) {
        return b.likes - a.likes;
      });
    }
  } else if (sortBy == "downloads") {
    if (order == "asc") {
      sorted.sort(function (a, b) {
        return a.downloads - b.downloads;
      });
    } else {
      sorted.sort(function (a, b) {
        return b.downloads - a.downloads;
      });
    }
  } else if (sortBy == "title") {
    if (order == "asc") {
      sorted.sort(function (a, b) {
        return a.title.localeCompare(b.title);
      });
    } else {
      sorted.sort(function (a, b) {
        return b.title.localeCompare(a.title);
      });
    }
  } else if (sortBy == "date") {
    if (order == "asc") {
      sorted.sort(function (a, b) {
        return new Date(a.dateTaken).getTime() - new Date(b.dateTaken).getTime();
      });
    } else {
      sorted.sort(function (a, b) {
        return new Date(b.dateTaken).getTime() - new Date(a.dateTaken).getTime();
      });
    }
  }

  return sorted;
}
