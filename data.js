// Sample recipe data with enhanced categories
const sampleRecipes = [
    {
        id: 1,
        name: "CHOLE BATURE",
        image: "photos/CHOLE BATURE.jpg",
        prepTime: 15,
        cookTime: 25,
        servings: 24,
        difficulty: "Easy",
        category: "breakfast",
        type: "vegetarian",
        description: "Soft, chewy chocolate chip cookies that are perfect for any occasion. These cookies have the perfect balance of crispy edges and soft centers.",
        ingredients: [
            "2 1/4 cups all-purpose flour",
            "1 teaspoon baking soda",
            "1 teaspoon salt",
            "1 cup butter, softened",
            "3/4 cup granulated sugar",
            "3/4 cup packed brown sugar",
            "2 large eggs",
            "2 teaspoons vanilla extract",
            "2 cups chocolate chips"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "In a medium bowl, whisk together flour, baking soda, and salt.",
            "In a large bowl, cream together butter, granulated sugar, and brown sugar until light and fluffy.",
            "Beat in eggs one at a time, then stir in vanilla.",
            "Gradually blend in the flour mixture.",
            "Stir in chocolate chips.",
            "Drop rounded tablespoons of dough onto ungreased cookie sheets.",
            "Bake for 9 to 11 minutes or until golden brown.",
            "Cool on baking sheet for 2 minutes; remove to wire rack."
        ],
        tags: ["cookies", "chocolate", "dessert", "baking"],
        rating: 4.8,
        favorites: 245
    },
    {
        id: 2,
        name: "dosa",
        image: "photos/DOSA.jpg",
        prepTime: 20,
        cookTime: 15,
        servings: 4,
        difficulty: "Easy",
        category: "lunch",
        type: "vegetarian",
        description: "A healthy and vibrant quinoa bowl packed with Mediterranean flavors. Perfect for a nutritious lunch or light dinner.",
        ingredients: [
            "1 cup quinoa",
            "2 cups vegetable broth",
            "1 cucumber, diced",
            "2 tomatoes, chopped",
            "1/2 red onion, thinly sliced",
            "1/2 cup kalamata olives",
            "1/2 cup feta cheese, crumbled",
            "1/4 cup fresh parsley, chopped",
            "3 tablespoons olive oil",
            "2 tablespoons lemon juice",
            "1 teaspoon dried oregano",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Rinse quinoa under cold water until water runs clear.",
            "In a medium saucepan, bring vegetable broth to a boil.",
            "Add quinoa, reduce heat to low, cover and simmer for 15 minutes.",
            "Remove from heat and let stand 5 minutes, then fluff with a fork.",
            "Let quinoa cool to room temperature.",
            "In a large bowl, combine cooled quinoa, cucumber, tomatoes, red onion, and olives.",
            "In a small bowl, whisk together olive oil, lemon juice, oregano, salt, and pepper.",
            "Pour dressing over quinoa mixture and toss to combine.",
            "Top with feta cheese and fresh parsley before serving."
        ],
        tags: ["healthy", "mediterranean", "quinoa", "vegetarian"],
        rating: 4.6,
        favorites: 189
    },
    {
        id: 3,
        name: "Fluffy Pancakes",
        image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=500",
        prepTime: 10,
        cookTime: 15,
        servings: 4,
        difficulty: "Easy",
        category: "breakfast",
        type: "vegetarian",
        description: "Light, fluffy pancakes that are perfect for weekend mornings. Serve with maple syrup and fresh berries.",
        ingredients: [
            "2 cups all-purpose flour",
            "2 tablespoons sugar",
            "2 teaspoons baking powder",
            "1 teaspoon salt",
            "2 large eggs",
            "1 3/4 cups milk",
            "1/4 cup melted butter",
            "1 teaspoon vanilla extract",
            "Butter or oil for cooking"
        ],
        instructions: [
            "In a large bowl, whisk together flour, sugar, baking powder, and salt.",
            "In another bowl, beat eggs, then whisk in milk, melted butter, and vanilla.",
            "Pour wet ingredients into dry ingredients and stir until just combined (batter should be lumpy).",
            "Heat a griddle or large skillet over medium heat and grease with butter or oil.",
            "Pour 1/4 cup of batter for each pancake onto the griddle.",
            "Cook until bubbles form on surface and edges look set, about 2-3 minutes.",
            "Flip and cook until golden brown on the other side, 1-2 minutes more.",
            "Serve immediately with maple syrup and desired toppings."
        ],
        tags: ["breakfast", "pancakes", "fluffy", "morning"],
        rating: 4.9,
        favorites: 312
    },
    {
        id: 4,
        name: "Grilled Salmon with Herbs",
        image: "https://images.pexels.com/photos/3297363/pexels-photo-3297363.jpeg?auto=compress&cs=tinysrgb&w=500",
        prepTime: 15,
        cookTime: 20,
        servings: 4,
        difficulty: "Medium",
        category: "dinner",
        type: "non-vegetarian",
        description: "Perfectly grilled salmon with a fresh herb crust. This healthy and delicious dish is packed with omega-3 fatty acids.",
        ingredients: [
            "4 salmon fillets (6 oz each)",
            "2 tablespoons olive oil",
            "2 cloves garlic, minced",
            "1/4 cup fresh dill, chopped",
            "2 tablespoons fresh parsley, chopped",
            "1 tablespoon fresh chives, chopped",
            "1 lemon, sliced",
            "Salt and pepper to taste",
            "Lemon wedges for serving"
        ],
        instructions: [
            "Preheat grill to medium-high heat.",
            "Pat salmon fillets dry and season with salt and pepper.",
            "In a small bowl, mix olive oil, garlic, dill, parsley, and chives.",
            "Brush herb mixture over salmon fillets.",
            "Place lemon slices on the grill for 2-3 minutes, then remove and set aside.",
            "Grill salmon skin-side down for 6-8 minutes.",
            "Carefully flip and grill for another 4-6 minutes until fish flakes easily.",
            "Serve immediately with grilled lemon slices and fresh lemon wedges."
        ],
        tags: ["salmon", "grilled", "healthy", "dinner"],
        rating: 4.7,
        favorites: 156
    },
    {
        id: 5,
        name: "Creamy Mushroom Risotto",
        image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=500",
        prepTime: 15,
        cookTime: 35,
        servings: 6,
        difficulty: "Hard",
        category: "dinner",
        type: "vegetarian",
        description: "A rich and creamy mushroom risotto that's perfect for special occasions. This classic Italian dish requires patience but is worth every minute.",
        ingredients: [
            "1 1/2 cups Arborio rice",
            "6 cups warm vegetable broth",
            "1 lb mixed mushrooms, sliced",
            "1 medium onion, finely chopped",
            "3 cloves garlic, minced",
            "1/2 cup dry white wine",
            "1/2 cup grated Parmesan cheese",
            "3 tablespoons butter",
            "2 tablespoons olive oil",
            "2 tablespoons fresh parsley, chopped",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Keep broth warm in a saucepan over low heat.",
            "Heat olive oil in a large, heavy-bottomed pan over medium heat.",
            "Add mushrooms and cook until golden, about 8 minutes. Season and set aside.",
            "In the same pan, melt 1 tablespoon butter and sauté onion until soft.",
            "Add garlic and rice, stirring to coat grains with fat.",
            "Pour in wine and stir until absorbed.",
            "Add warm broth one ladle at a time, stirring constantly, until rice is creamy and tender (about 20-25 minutes).",
            "Stir in cooked mushrooms, remaining butter, and Parmesan cheese.",
            "Season with salt and pepper, garnish with parsley and serve immediately."
        ],
        tags: ["risotto", "mushrooms", "italian", "creamy"],
        rating: 4.5,
        favorites: 201
    },
    {
        id: 6,
        name: "Fresh Berry Smoothie Bowl",
        image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=500",
        prepTime: 10,
        cookTime: 0,
        servings: 2,
        difficulty: "Easy",
        category: "breakfast",
        type: "vegetarian",
        description: "A refreshing and nutritious smoothie bowl topped with fresh fruits and crunchy granola. Perfect for a healthy start to your day.",
        ingredients: [
            "1 frozen banana",
            "1 cup frozen mixed berries",
            "1/2 cup Greek yogurt",
            "1/4 cup almond milk",
            "1 tablespoon honey",
            "1/4 cup granola",
            "Fresh strawberries, sliced",
            "Fresh blueberries",
            "2 tablespoons chia seeds",
            "2 tablespoons coconut flakes",
            "Fresh mint leaves for garnish"
        ],
        instructions: [
            "Add frozen banana, frozen berries, Greek yogurt, almond milk, and honey to a blender.",
            "Blend until thick and creamy, adding more almond milk if needed.",
            "Pour smoothie into bowls.",
            "Top with granola, fresh strawberries, and blueberries.",
            "Sprinkle with chia seeds and coconut flakes.",
            "Garnish with fresh mint leaves and serve immediately."
        ],
        tags: ["smoothie", "healthy", "breakfast", "berries"],
        rating: 4.8,
        favorites: 278
    },
    {
        id: 7,
        name: "Spicy Chicken Tikka",
        image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=500",
        prepTime: 30,
        cookTime: 20,
        servings: 4,
        difficulty: "Medium",
        category: "dinner",
        type: "non-vegetarian",
        description: "Tender and flavorful chicken tikka marinated in aromatic spices and grilled to perfection. A classic Indian dish that's perfect for any occasion.",
        ingredients: [
            "2 lbs chicken breast, cut into cubes",
            "1 cup plain yogurt",
            "2 tablespoons lemon juice",
            "2 teaspoons garam masala",
            "1 teaspoon cumin powder",
            "1 teaspoon coriander powder",
            "1 teaspoon paprika",
            "1/2 teaspoon turmeric",
            "3 cloves garlic, minced",
            "1 inch ginger, grated",
            "Salt to taste",
            "2 tablespoons oil"
        ],
        instructions: [
            "In a large bowl, mix yogurt, lemon juice, and all spices.",
            "Add chicken cubes and marinate for at least 2 hours or overnight.",
            "Preheat grill or oven to high heat.",
            "Thread chicken onto skewers.",
            "Grill for 15-20 minutes, turning occasionally until cooked through.",
            "Brush with oil during cooking to prevent drying.",
            "Serve hot with naan bread and mint chutney."
        ],
        tags: ["chicken", "indian", "spicy", "grilled"],
        rating: 4.7,
        favorites: 198
    },
    {
        id: 8,
        name: "Vegetable Stir Fry",
        image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=500",
        prepTime: 15,
        cookTime: 10,
        servings: 4,
        difficulty: "Easy",
        category: "lunch",
        type: "vegetarian",
        description: "A colorful and nutritious vegetable stir fry that's quick to make and packed with flavor. Perfect for a healthy weekday meal.",
        ingredients: [
            "2 cups broccoli florets",
            "1 bell pepper, sliced",
            "1 carrot, julienned",
            "1 zucchini, sliced",
            "1 onion, sliced",
            "3 cloves garlic, minced",
            "2 tablespoons soy sauce",
            "1 tablespoon sesame oil",
            "1 teaspoon ginger, grated",
            "2 tablespoons vegetable oil",
            "1 teaspoon sesame seeds",
            "Green onions for garnish"
        ],
        instructions: [
            "Heat vegetable oil in a large wok or skillet over high heat.",
            "Add garlic and ginger, stir fry for 30 seconds.",
            "Add harder vegetables first (broccoli, carrots) and cook for 2-3 minutes.",
            "Add remaining vegetables and stir fry for 3-4 minutes.",
            "Mix soy sauce and sesame oil, pour over vegetables.",
            "Toss everything together and cook for another minute.",
            "Garnish with sesame seeds and green onions before serving."
        ],
        tags: ["vegetables", "healthy", "quick", "asian"],
        rating: 4.4,
        favorites: 167
    },
    {
        id: 9,
        name: "veg biryani",
        image: "photos/VEG-BIRYANI.jpg",
        prepTime: 10,
        cookTime: 0,
        servings: 4,
        difficulty: "Easy",
        category: "lunch",
        type: "vegetarian",
        description: "A timeless Caesar salad with crisp romaine lettuce, creamy dressing, croutons, and Parmesan cheese. Perfect as a side or main dish.",
        ingredients: [
            "1 large head of romaine lettuce, chopped",
            "1/2 cup Caesar dressing",
            "1/2 cup croutons",
            "1/4 cup grated Parmesan cheese",
            "Salt and pepper to taste",
            "Lemon wedges for serving"
        ],
        instructions: [
            "In a large bowl, combine chopped romaine lettuce and Caesar dressing.",
            "Toss until lettuce is evenly coated.",
            "Add croutons and grated Parmesan cheese, toss gently.",
            "Season with salt and pepper to taste.",
            "Serve immediately with lemon wedges on the side."
        ],
        tags: ["salad", "caesar", "vegetarian", "quick"],
        rating: 4.6,
        favorites: 142
    }
];



// Initialize favorites and cart from localStorage
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to save favorites to localStorage
function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Function to save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to check if a recipe is favorited
function isFavorited(recipeId) {
    return favorites.includes(recipeId);
}

// Function to check if a recipe is in cart
function isInCart(recipeId) {
    return cart.includes(recipeId);
}

// Function to toggle favorite status
function toggleFavorite(recipeId) {
    if (isFavorited(recipeId)) {
        favorites = favorites.filter(id => id !== recipeId);
    } else {
        favorites.push(recipeId);
    }
    saveFavorites();
    updateFavoriteCount();
}

// Function to toggle cart status
function toggleCart(recipeId) {
    if (isInCart(recipeId)) {
        cart = cart.filter(id => id !== recipeId);
    } else {
        cart.push(recipeId);
    }
    saveCart();
}

// Function to remove recipe from cart
function removeFromCart(recipeId) {
    cart = cart.filter(id => id !== recipeId);
    saveCart();
}

// Function to update favorite count in profile
function updateFavoriteCount() {
    const favoriteCountElement = document.getElementById('favoriteCount');
    if (favoriteCountElement) {
        favoriteCountElement.textContent = favorites.length;
    }
}