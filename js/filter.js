// Blog tag filtering functionality

function filterByTag(selectedTag) {
  // Get all filter tags and blog items
  const filterTags = document.querySelectorAll('.filter-tag');
  const blogItems = document.querySelectorAll('.blog-item');
  
  // Update active state of filter tags
  filterTags.forEach(tag => {
    tag.classList.remove('active');
  });
  
  // Set the clicked tag as active
  const activeTag = document.querySelector(`[onclick="filterByTag('${selectedTag}')"]`);
  if (activeTag) {
    activeTag.classList.add('active');
  }
  
  // Filter blog items
  blogItems.forEach(item => {
    const itemTags = item.getAttribute('data-tags');
    
    if (selectedTag === 'all') {
      // Show all items
      item.classList.remove('hidden');
    } else {
      // Split tags and check for match
      const itemTagArray = itemTags.split(' ');
      let hasMatchingTag = false;
      
      if (selectedTag === 'code') {
        // For 'code' filter, include both 'code' and 'toy-code'
        hasMatchingTag = itemTagArray.includes('code') || itemTagArray.includes('toy-code');
      } else {
        // For other filters, use exact match
        hasMatchingTag = itemTagArray.includes(selectedTag);
      }
      
      if (hasMatchingTag) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    }
  });
}

// Initialize filter on page load
document.addEventListener('DOMContentLoaded', function() {
  // Ensure 'All' is selected by default
  filterByTag('all');
});
