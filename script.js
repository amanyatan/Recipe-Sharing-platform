// Global variables
let currentRecipes = [...sampleRecipes];
let currentFilter = 'all';
let currentSearchTerm = '';
let currentPage = 'recipes';

// DOM elements
const splashScreen = document.getElementById('splashScreen');
const recipesGrid = document.getElementById('recipesGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navItems = document.querySelectorAll('.nav-item');
const recipeModal = document.getElementById('recipeModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const addRecipeBtn = document.getElementById('addRecipeBtn');
const addRecipeModal = document.getElementById('addRecipeModal');
const addModalOverlay = document.getElementById('addModalOverlay');
const addModalClose = document.getElementById('addModalClose');
const recipeForm = document.getElementById('recipeForm');
const cancelForm = document.getElementById('cancelForm');

// Page elements
const mainContent = document.getElementById('mainContent');
const cartPage = document.getElementById('cartPage');
const profilePage = document.getElementById('profilePage');
const categoriesPage = document.getElementById('categoriesPage');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    showSplashScreen();
    setupEventListeners();
    createStarField();
    updateFavoriteCount();
});

// Show splash screen for 3 seconds
function showSplashScreen() {
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
        setTimeout(() => {
            splashScreen.style.display = 'none';
            renderRecipes();
        }, 500);
    }, 3000);
}

// Create animated star field
function createStarField() {
    const starsContainer = document.querySelector('.stars');
    const stars2Container = document.querySelector('.stars2');
    const stars3Container = document.querySelector('.stars3');
    
    // Add more dynamic stars
    for (let i = 0; i < 50; i++) {
        createStar(starsContainer, Math.random() * 3 + 1);
    }
    for (let i = 0; i < 30; i++) {
        createStar(stars2Container, Math.random() * 2 + 1);
    }
    for (let i = 0; i < 20; i++) {
        createStar(stars3Container, Math.random() * 1.5 + 0.5);
    }
}

function createStar(container, size) {
    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    star.style.borderRadius = '50%';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
    container.appendChild(star);
}

// Add twinkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
    }
`;
document.head.appendChild(style);

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Filter functionality
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });
    
    // Navigation toggle
    navToggle.addEventListener('click', toggleNavMenu);
    
    // Navigation items
    navItems.forEach(item => {
        item.addEventListener('click', handleNavigation);
    });
    
    // Modal functionality
    modalOverlay.addEventListener('click', closeRecipeModal);
    modalClose.addEventListener('click', closeRecipeModal);
    addModalOverlay.addEventListener('click', closeAddRecipeModal);
    addModalClose.addEventListener('click', closeAddRecipeModal);
    cancelForm.addEventListener('click', closeAddRecipeModal);
    
    // Add recipe functionality
    addRecipeBtn.addEventListener('click', openAddRecipeModal);
    recipeForm.addEventListener('submit', handleAddRecipe);
    
    // Category cards functionality
    document.addEventListener('click', function(e) {
        if (e.target.closest('.category-card')) {
            const category = e.target.closest('.category-card').dataset.category;
            handleCategoryClick(category);
        }
    });
    
    // Close modals with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeRecipeModal();
            closeAddRecipeModal();
        }
    });
}

// Handle category card clicks
function handleCategoryClick(category) {
    // Switch to recipes page
    showPage('recipes');
    
    // Set the filter
    currentFilter = category;
    
    // Update filter buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    const targetBtn = document.querySelector(`[data-filter="${category}"]`);
    if (targetBtn) {
        targetBtn.classList.add('active');
    }
    
    // Filter and render recipes
    filterRecipes();
    
    // Close navigation menu
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
}

// Show specific page
function showPage(page) {
    // Hide all pages
    mainContent.style.display = 'none';
    cartPage.style.display = 'none';
    profilePage.style.display = 'none';
    categoriesPage.style.display = 'none';
    
    // Show selected page
    switch(page) {
        case 'recipes':
            mainContent.style.display = 'block';
            break;
        case 'cart':
        case 'shopping':
            cartPage.style.display = 'block';
            renderCart();
            break;
        case 'profile':
            profilePage.style.display = 'block';
            break;
        case 'categories':
            categoriesPage.style.display = 'block';
            break;
    }
    
    currentPage = page;
}

// Render recipes
function renderRecipes() {
    recipesGrid.innerHTML = '';
    
    if (currentRecipes.length === 0) {
        recipesGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: rgba(255,255,255,0.5); margin-bottom: 1rem;"></i>
                <h3 style="color: rgba(255,255,255,0.8); margin-bottom: 0.5rem;">No recipes found</h3>
                <p style="color: rgba(255,255,255,0.6);">Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    currentRecipes.forEach((recipe, index) => {
        const recipeCard = createRecipeCard(recipe);
        recipeCard.style.animationDelay = `${index * 0.1}s`;
        recipeCard.classList.add('fade-in');
        recipesGrid.appendChild(recipeCard);
    });
}

// Create recipe card element
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.onclick = () => openRecipeModal(recipe);
    
    const totalTime = recipe.prepTime + recipe.cookTime;
    const difficultyClass = `difficulty-${recipe.difficulty.toLowerCase()}`;
    
    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image" loading="lazy">
        <div class="recipe-content">
            <div class="recipe-header">
                <h3 class="recipe-title">${recipe.name}</h3>
                <div class="recipe-actions">
                    <button class="favorite-btn ${isFavorited(recipe.id) ? 'favorited' : ''}" onclick="event.stopPropagation(); handleFavorite(${recipe.id})" title="Add to favorites">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="cart-btn ${isInCart(recipe.id) ? 'in-cart' : ''}" onclick="event.stopPropagation(); handleCart(${recipe.id})" title="Add to cart">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                    <button class="delete-btn" onclick="event.stopPropagation(); handleDelete(${recipe.id})" title="Delete recipe">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="recipe-meta">
                <div class="meta-item">
                    <i class="fas fa-clock"></i>
                    <span>${totalTime} min</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-users"></i>
                    <span>${recipe.servings} servings</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-star"></i>
                    <span>${recipe.rating}</span>
                </div>
            </div>
            <p class="recipe-description">${recipe.description}</p>
            <div class="recipe-tags">
                <span class="recipe-tag ${difficultyClass}">${recipe.difficulty}</span>
                <span class="recipe-tag">${recipe.category}</span>
                <span class="recipe-tag">${recipe.type}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Handle search
function handleSearch(e) {
    currentSearchTerm = e.target.value.toLowerCase();
    filterRecipes();
}

// Handle filter
function handleFilter(e) {
    // Update active filter button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    currentFilter = e.target.dataset.filter;
    filterRecipes();
}

// Filter recipes based on search and category
function filterRecipes() {
    let filteredRecipes = [...sampleRecipes];
    
    // Apply search filter
    if (currentSearchTerm) {
        filteredRecipes = filteredRecipes.filter(recipe => 
            recipe.name.toLowerCase().includes(currentSearchTerm) ||
            recipe.description.toLowerCase().includes(currentSearchTerm) ||
            recipe.ingredients.some(ingredient => 
                ingredient.toLowerCase().includes(currentSearchTerm)
            ) ||
            recipe.tags.some(tag => 
                tag.toLowerCase().includes(currentSearchTerm)
            )
        );
    }
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filteredRecipes = filteredRecipes.filter(recipe => 
            recipe.category === currentFilter || recipe.type === currentFilter
        );
    }
    
    currentRecipes = filteredRecipes;
    renderRecipes();
}

// Handle favorite toggle
function handleFavorite(recipeId) {
    toggleFavorite(recipeId);
    
    // Update the favorite button
    const favoriteBtn = document.querySelector(`button[onclick*="handleFavorite(${recipeId})"]`);
    if (favoriteBtn) {
        if (isFavorited(recipeId)) {
            favoriteBtn.classList.add('favorited');
        } else {
            favoriteBtn.classList.remove('favorited');
        }
    }
    
    // Add some visual feedback
    const heart = favoriteBtn.querySelector('i');
    heart.style.transform = 'scale(1.3)';
    setTimeout(() => {
        heart.style.transform = 'scale(1)';
    }, 200);
    
    // If we're on favorites page, re-render
    if (currentPage === 'favorites') {
        showFavorites();
    }
}

// Handle cart toggle
function handleCart(recipeId) {
    toggleCart(recipeId);
    
    // Update the cart button
    const cartBtn = document.querySelector(`button[onclick*="handleCart(${recipeId})"]`);
    if (cartBtn) {
        if (isInCart(recipeId)) {
            cartBtn.classList.add('in-cart');
        } else {
            cartBtn.classList.remove('in-cart');
        }
    }
    
    // Add some visual feedback
    const cartIcon = cartBtn.querySelector('i');
    cartIcon.style.transform = 'scale(1.3)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 200);
    
    showSuccessMessage(isInCart(recipeId) ? 'Added to cart!' : 'Removed from cart!');
}

// Handle recipe deletion
function handleDelete(recipeId) {
    if (confirm('Are you sure you want to delete this recipe?')) {
        // Remove from sample recipes
        const index = sampleRecipes.findIndex(recipe => recipe.id === recipeId);
        if (index > -1) {
            sampleRecipes.splice(index, 1);
        }
        
        // Remove from favorites and cart if present
        favorites = favorites.filter(id => id !== recipeId);
        cart = cart.filter(id => id !== recipeId);
        saveFavorites();
        saveCart();
        updateFavoriteCount();
        
        // Re-render current view
        if (currentPage === 'recipes') {
            filterRecipes();
        } else if (currentPage === 'favorites') {
            showFavorites();
        } else if (currentPage === 'cart' || currentPage === 'shopping') {
            renderCart();
        }
        
        showSuccessMessage('Recipe deleted successfully!');
    }
}

// Toggle navigation menu
function toggleNavMenu() {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Handle navigation
function handleNavigation(e) {
    e.preventDefault();
    
    // Update active nav item
    navItems.forEach(item => item.classList.remove('active'));
    e.currentTarget.classList.add('active');
    
    const section = e.currentTarget.dataset.section;
    
    // Close navigation menu
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    
    // Handle different sections
    switch(section) {
        case 'recipes':
            showPage('recipes');
            currentFilter = 'all';
            currentSearchTerm = '';
            searchInput.value = '';
            filterButtons.forEach(btn => btn.classList.remove('active'));
            filterButtons[0].classList.add('active');
            currentRecipes = [...sampleRecipes];
            renderRecipes();
            break;
        case 'favorites':
            showPage('recipes');
            showFavorites();
            break;
        case 'categories':
            showPage('categories');
            break;
        case 'shopping':
            showPage('cart');
            break;
        case 'profile':
            showPage('profile');
            break;
    }
}

// Show favorites
function showFavorites() {
    showPage('recipes');
    const favoriteRecipes = sampleRecipes.filter(recipe => isFavorited(recipe.id));
    currentRecipes = favoriteRecipes;
    
    // Update search placeholder
    searchInput.placeholder = 'Search your favorite recipes...';
    
    renderRecipes();
}

// Render cart
function renderCart() {
    const cartContent = document.getElementById('cartContent');
    
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some delicious recipes to get started!</p>
            </div>
        `;
        return;
    }
    
    const cartRecipes = sampleRecipes.filter(recipe => isInCart(recipe.id));
    
    cartContent.innerHTML = cartRecipes.map(recipe => `
        <div class="cart-item">
            <img src="${recipe.image}" alt="${recipe.name}" class="cart-item-image">
            <div class="cart-item-info">
                <h4 class="cart-item-title">${recipe.name}</h4>
                <div class="cart-item-meta">
                    <span><i class="fas fa-clock"></i> ${recipe.prepTime + recipe.cookTime} min</span>
                    <span><i class="fas fa-users"></i> ${recipe.servings} servings</span>
                    <span><i class="fas fa-signal"></i> ${recipe.difficulty}</span>
                </div>
            </div>
            <button class="cart-remove-btn" onclick="removeRecipeFromCart(${recipe.id})" title="Remove from cart">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');
}

// Remove recipe from cart
function removeRecipeFromCart(recipeId) {
    removeFromCart(recipeId);
    renderCart();
    
    // Update cart button if recipe is visible
    const cartBtn = document.querySelector(`button[onclick*="handleCart(${recipeId})"]`);
    if (cartBtn) {
        cartBtn.classList.remove('in-cart');
    }
    
    showSuccessMessage('Removed from cart!');
}

// Open recipe modal
function openRecipeModal(recipe) {
    const totalTime = recipe.prepTime + recipe.cookTime;
    const difficultyClass = `difficulty-${recipe.difficulty.toLowerCase()}`;
    
    modalBody.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-detail-image">
        <div class="recipe-detail-header">
            <h2 class="recipe-detail-title">${recipe.name}</h2>
            <div class="recipe-detail-meta">
                <div class="detail-meta-item">
                    <i class="fas fa-clock"></i>
                    <span class="label">Prep Time</span>
                    <span class="value">${recipe.prepTime} min</span>
                </div>
                <div class="detail-meta-item">
                    <i class="fas fa-fire"></i>
                    <span class="label">Cook Time</span>
                    <span class="value">${recipe.cookTime} min</span>
                </div>
                <div class="detail-meta-item">
                    <i class="fas fa-users"></i>
                    <span class="label">Servings</span>
                    <span class="value">${recipe.servings}</span>
                </div>
                <div class="detail-meta-item">
                    <i class="fas fa-signal"></i>
                    <span class="label">Difficulty</span>
                    <span class="value ${difficultyClass}">${recipe.difficulty}</span>
                </div>
            </div>
            <p class="recipe-detail-description">${recipe.description}</p>
        </div>
        
        <div class="ingredients-section">
            <h3 class="section-title">
                <i class="fas fa-list"></i>
                Ingredients
            </h3>
            <div class="ingredients-list">
                ${recipe.ingredients.map(ingredient => 
                    `<div class="ingredient-item">${ingredient}</div>`
                ).join('')}
            </div>
        </div>
        
        <div class="instructions-section">
            <h3 class="section-title">
                <i class="fas fa-clipboard-list"></i>
                Instructions
            </h3>
            <ol class="instructions-list">
                ${recipe.instructions.map(instruction => 
                    `<li class="instruction-item">${instruction}</li>`
                ).join('')}
            </ol>
        </div>
    `;
    
    recipeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close recipe modal
function closeRecipeModal() {
    recipeModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Open add recipe modal
function openAddRecipeModal() {
    addRecipeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close add recipe modal
function closeAddRecipeModal() {
    addRecipeModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    recipeForm.reset();
}

// Handle add recipe form submission
function handleAddRecipe(e) {
    e.preventDefault();
    
    const newRecipe = {
        id: Date.now(),
        name: document.getElementById('recipeName').value,
        image: document.getElementById('recipeImage').value || 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
        prepTime: parseInt(document.getElementById('prepTime').value),
        cookTime: parseInt(document.getElementById('cookTime').value),
        servings: parseInt(document.getElementById('servings').value),
        difficulty: document.getElementById('difficulty').value,
        category: document.getElementById('category').value,
        type: document.getElementById('category').value === 'vegetarian' || document.getElementById('category').value === 'non-vegetarian' ? document.getElementById('category').value : 'vegetarian',
        description: document.getElementById('description').value,
        ingredients: document.getElementById('ingredients').value.split('\n').filter(ingredient => ingredient.trim()),
        instructions: document.getElementById('instructions').value.split('\n').filter(instruction => instruction.trim()),
        tags: [document.getElementById('category').value, document.getElementById('difficulty').value.toLowerCase()],
        rating: 5.0,
        favorites: 0
    };
    
    // Add to sample recipes
    sampleRecipes.unshift(newRecipe);
    
    // Update current recipes and re-render
    if (currentFilter === 'all' || currentFilter === newRecipe.category || currentFilter === newRecipe.type) {
        currentRecipes = [...sampleRecipes];
        filterRecipes();
    }
    
    // Close modal and show success message
    closeAddRecipeModal();
    showSuccessMessage('Recipe added successfully!');
}

// Show success message
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(72, 187, 120, 0.4);
        z-index: 3000;
        font-weight: 600;
        animation: slideInRight 0.3s ease;
    `;
    successDiv.textContent = message;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(successDiv)) {
                document.body.removeChild(successDiv);
            }
        }, 300);
    }, 3000);
}

// Add slide animations
const slideStyle = document.createElement('style');
slideStyle.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(slideStyle);

// Handle window resize for responsive design
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add loading states for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});