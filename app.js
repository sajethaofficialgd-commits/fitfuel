// ========================================
// FitTrack India - Main Application
// ========================================

// App State
const APP = {
    user: null,
    currentStep: 1,
    selectedFood: null,
    selectedExercise: null,
    unitMode: 'serving', // 'serving' or 'grams'
    today: new Date().toISOString().split('T')[0],
    logs: { food: [], exercise: [], steps: [], water: 0 }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        splash.style.display = 'none';
        checkUserSession();
    }, 2500);

    initEventListeners();
});

// Check if user exists
function checkUserSession() {
    const savedUser = localStorage.getItem('fittrack_user');
    if (savedUser) {
        APP.user = JSON.parse(savedUser);
        loadDailyLogs();
        showScreen('app-screen');
        updateDashboard();
    } else {
        showScreen('login-screen');
    }
}

// Show specific screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
}

// Initialize all event listeners
function initEventListeners() {
    // Login buttons
    document.getElementById('google-login-btn').addEventListener('click', handleGoogleLogin);
    document.getElementById('demo-login-btn').addEventListener('click', handleDemoLogin);

    // Onboarding
    document.getElementById('next-btn').addEventListener('click', nextOnboardingStep);
    document.getElementById('prev-btn').addEventListener('click', prevOnboardingStep);

    // BMI calculation on input
    ['user-height', 'user-weight'].forEach(id => {
        document.getElementById(id).addEventListener('input', calculateBMI);
    });

    // Bottom navigation
    document.querySelectorAll('.nav-item[data-tab]').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // Quick add button
    document.getElementById('add-main-btn').addEventListener('click', () => toggleModal('quick-add-modal', true));

    // Quick actions
    document.getElementById('quick-food').addEventListener('click', () => { switchTab('food'); });
    document.getElementById('quick-exercise').addEventListener('click', () => { switchTab('exercise'); });
    document.getElementById('quick-water').addEventListener('click', addWater);
    document.getElementById('add-steps-btn').addEventListener('click', () => toggleModal('add-steps-modal', true));

    // Food search and categories
    document.getElementById('food-search').addEventListener('input', filterFoods);
    document.querySelectorAll('#food-categories .category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#food-categories .category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterFoods();
        });
    });

    // Exercise search and categories
    document.getElementById('exercise-search').addEventListener('input', filterExercises);
    document.querySelectorAll('#exercise-categories .category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#exercise-categories .category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterExercises();
        });
    });

    // Modal controls
    document.querySelectorAll('.modal-close, .modal-cancel, .modal-overlay').forEach(el => {
        el.addEventListener('click', closeAllModals);
    });

    // Food modal quantity controls
    document.querySelector('.qty-btn.minus').addEventListener('click', () => adjustQuantity(-0.5));
    document.querySelector('.qty-btn.plus').addEventListener('click', () => adjustQuantity(0.5));
    document.getElementById('food-quantity').addEventListener('input', updateFoodTotal);
    document.getElementById('confirm-add-food').addEventListener('click', confirmAddFood);
    document.getElementById('add-more-food').addEventListener('click', addMoreFood);

    // Unit selector (Serving vs Grams)
    document.querySelectorAll('.unit-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.unit-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            APP.unitMode = btn.dataset.unit;
            updateUnitDisplay();
            updateFoodTotal();
        });
    });

    // Exercise modal controls
    document.querySelector('.duration-btn.minus').addEventListener('click', () => adjustDuration(-5));
    document.querySelector('.duration-btn.plus').addEventListener('click', () => adjustDuration(5));
    document.getElementById('exercise-duration').addEventListener('input', updateExerciseBurn);
    document.querySelectorAll('input[name="intensity"]').forEach(inp => {
        inp.addEventListener('change', updateExerciseBurn);
    });
    document.getElementById('confirm-add-exercise').addEventListener('click', confirmAddExercise);

    // Steps modal
    document.getElementById('manual-steps').addEventListener('input', updateStepsPreview);
    document.querySelectorAll('.quick-steps-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const current = parseInt(document.getElementById('manual-steps').value) || 0;
            document.getElementById('manual-steps').value = current + parseInt(btn.dataset.steps);
            updateStepsPreview();
        });
    });
    document.getElementById('confirm-add-steps').addEventListener('click', confirmAddSteps);

    // Quick add modal options
    document.querySelectorAll('.quick-add-option').forEach(opt => {
        opt.addEventListener('click', () => {
            closeAllModals();
            const action = opt.dataset.action;
            if (action === 'food') switchTab('food');
            else if (action === 'exercise') switchTab('exercise');
            else if (action === 'steps') toggleModal('add-steps-modal', true);
            else if (action === 'water') addWater();
        });
    });
    document.querySelector('.quick-add-close').addEventListener('click', closeAllModals);

    // Water glasses
    document.querySelectorAll('.glass').forEach(glass => {
        glass.addEventListener('click', () => {
            const glassNum = parseInt(glass.dataset.glass);
            APP.logs.water = glassNum;
            updateWaterUI();
            saveDailyLogs();
            showToast('Water intake updated!', 'success');
        });
    });

    // Profile actions
    document.getElementById('logout-btn').addEventListener('click', logout);
    document.getElementById('export-data-btn').addEventListener('click', exportData);

    // Settings button opens profile
    document.getElementById('settings-btn').addEventListener('click', () => switchTab('profile'));

    // Add first meal/exercise buttons
    document.getElementById('add-first-meal')?.addEventListener('click', () => switchTab('food'));
    document.getElementById('add-first-exercise')?.addEventListener('click', () => switchTab('exercise'));

    // Clear all meals button
    document.getElementById('clear-all-meals')?.addEventListener('click', clearAllMeals);

    // Populate food and exercise lists
    populateFoodList();
    populateExerciseList();
}

// ========================================
// LOGIN HANDLERS
// ========================================

function handleGoogleLogin() {
    // In production, implement real Google OAuth
    // For demo, simulate login
    showToast('Google Login - Demo Mode', 'warning');
    handleDemoLogin();
}

function handleDemoLogin() {
    showScreen('onboarding-screen');
}

// ========================================
// ONBOARDING
// ========================================

function nextOnboardingStep() {
    if (!validateCurrentStep()) return;

    if (APP.currentStep < 4) {
        APP.currentStep++;
        updateOnboardingUI();
    } else {
        completeOnboarding();
    }
}

function prevOnboardingStep() {
    if (APP.currentStep > 1) {
        APP.currentStep--;
        updateOnboardingUI();
    }
}

function updateOnboardingUI() {
    // Update progress
    document.getElementById('onboarding-progress').style.width = `${APP.currentStep * 25}%`;
    document.getElementById('current-step').textContent = APP.currentStep;

    // Show current step
    document.querySelectorAll('.onboarding-step').forEach((step, i) => {
        step.classList.toggle('active', i + 1 === APP.currentStep);
    });

    // Show/hide prev button
    document.getElementById('prev-btn').classList.toggle('hidden', APP.currentStep === 1);

    // Update next button text
    const nextBtn = document.getElementById('next-btn');
    if (APP.currentStep === 4) {
        nextBtn.innerHTML = 'Complete <i class="fas fa-check"></i>';
    } else {
        nextBtn.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
    }
}

function validateCurrentStep() {
    if (APP.currentStep === 1) {
        const name = document.getElementById('user-name').value.trim();
        const age = document.getElementById('user-age').value;
        const gender = document.getElementById('user-gender').value;
        if (!name || !age || !gender) {
            showToast('Please fill all fields', 'error');
            return false;
        }
    } else if (APP.currentStep === 2) {
        const height = document.getElementById('user-height').value;
        const weight = document.getElementById('user-weight').value;
        if (!height || !weight) {
            showToast('Please enter height and weight', 'error');
            return false;
        }
    } else if (APP.currentStep === 3) {
        const goal = document.querySelector('input[name="goal"]:checked');
        if (!goal) {
            showToast('Please select your goal', 'error');
            return false;
        }
    } else if (APP.currentStep === 4) {
        const activity = document.querySelector('input[name="activity"]:checked');
        if (!activity) {
            showToast('Please select activity level', 'error');
            return false;
        }
    }
    return true;
}

function calculateBMI() {
    const height = parseFloat(document.getElementById('user-height').value) / 100;
    const weight = parseFloat(document.getElementById('user-weight').value);

    if (height > 0 && weight > 0) {
        const bmi = weight / (height * height);
        document.getElementById('bmi-value').textContent = bmi.toFixed(1);

        let status = '';
        if (bmi < 18.5) status = 'Underweight';
        else if (bmi < 25) status = 'Normal';
        else if (bmi < 30) status = 'Overweight';
        else status = 'Obese';

        document.getElementById('bmi-status').textContent = status;
    }
}

function completeOnboarding() {
    const name = document.getElementById('user-name').value.trim();
    const age = parseInt(document.getElementById('user-age').value);
    const gender = document.getElementById('user-gender').value;
    const height = parseFloat(document.getElementById('user-height').value);
    const weight = parseFloat(document.getElementById('user-weight').value);
    const goal = document.querySelector('input[name="goal"]:checked').value;
    const activity = document.querySelector('input[name="activity"]:checked').value;

    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Activity multipliers
    const multipliers = { sedentary: 1.2, moderate: 1.375, active: 1.55, heavy: 1.725 };
    const tdee = bmr * multipliers[activity];

    // Adjust based on goal
    let dailyCalories = tdee;
    if (goal === 'loss') dailyCalories -= 500;
    else if (goal === 'gain') dailyCalories += 500;

    // Calculate macros (40% carbs, 30% protein, 30% fat)
    const proteinTarget = Math.round((dailyCalories * 0.3) / 4);
    const carbsTarget = Math.round((dailyCalories * 0.4) / 4);
    const fatTarget = Math.round((dailyCalories * 0.3) / 9);

    // Calculate ideal weight range (BMI 18.5-24.9)
    const heightM = height / 100;
    const idealMin = Math.round(18.5 * heightM * heightM);
    const idealMax = Math.round(24.9 * heightM * heightM);

    APP.user = {
        email: 'demo@fittrack.in',
        name, age, gender, height, weight, goal, activity,
        bmr: Math.round(bmr),
        dailyCalories: Math.round(dailyCalories),
        proteinTarget, carbsTarget, fatTarget,
        idealWeightMin: idealMin,
        idealWeightMax: idealMax,
        createdAt: new Date().toISOString()
    };

    localStorage.setItem('fittrack_user', JSON.stringify(APP.user));

    showToast('Profile created successfully!', 'success');
    showScreen('app-screen');
    updateDashboard();
}

// ========================================
// DASHBOARD
// ========================================

function updateDashboard() {
    if (!APP.user) return;

    // Update greeting
    const hour = new Date().getHours();
    let greeting = 'Good Morning';
    if (hour >= 12 && hour < 17) greeting = 'Good Afternoon';
    else if (hour >= 17) greeting = 'Good Evening';

    document.getElementById('greeting-text').textContent = greeting;
    document.getElementById('user-name-display').textContent = APP.user.name.split(' ')[0];

    // Calculate totals
    const totals = calculateDailyTotals();

    // Update calorie ring
    const caloriePercent = Math.min((totals.calories / APP.user.dailyCalories) * 100, 100);
    const dashOffset = 534 - (534 * caloriePercent / 100);
    document.getElementById('calorie-ring-progress').style.strokeDashoffset = dashOffset;

    document.getElementById('calories-eaten').textContent = totals.calories;
    document.getElementById('calories-target').textContent = APP.user.dailyCalories;
    document.getElementById('calories-remaining').textContent = Math.max(0, APP.user.dailyCalories - totals.calories + totals.burned);
    document.getElementById('calories-burned').textContent = totals.burned;

    // Update macros
    updateMacroUI('protein', totals.protein, APP.user.proteinTarget);
    updateMacroUI('carbs', totals.carbs, APP.user.carbsTarget);
    updateMacroUI('fat', totals.fat, APP.user.fatTarget);

    // Update steps
    updateStepsUI();

    // Update meals list
    updateMealsList();

    // Update exercises list
    updateExercisesList();

    // Update water UI
    updateWaterUI();

    // Update profile
    updateProfileUI();

    // Update summary
    updateSummary();

    // HealthifyMe-like features
    updateMealBreakdown();
    updateStreak();
    updateDailyTip();
    updateRecentFoods();
    updateWeightTracker();
}

function calculateDailyTotals() {
    let calories = 0, protein = 0, carbs = 0, fat = 0, burned = 0;

    APP.logs.food.forEach(log => {
        calories += log.calories;
        protein += log.protein;
        carbs += log.carbs;
        fat += log.fat;
    });

    APP.logs.exercise.forEach(log => {
        burned += log.caloriesBurned;
    });

    APP.logs.steps.forEach(log => {
        burned += log.caloriesBurned;
    });

    return {
        calories: Math.round(calories),
        protein: Math.round(protein),
        carbs: Math.round(carbs),
        fat: Math.round(fat),
        burned: Math.round(burned)
    };
}

function updateMacroUI(macro, current, target) {
    const percent = Math.min((current / target) * 100, 100);
    document.getElementById(`${macro}-eaten`).textContent = current;
    document.getElementById(`${macro}-target`).textContent = target;
    document.getElementById(`${macro}-progress`).style.width = `${percent}%`;
}

function updateStepsUI() {
    const totalSteps = APP.logs.steps.reduce((sum, s) => sum + s.steps, 0);
    const percent = Math.min((totalSteps / 10000) * 100, 100);
    const dashOffset = 251 - (251 * percent / 100);

    document.getElementById('steps-ring-fill').style.strokeDashoffset = dashOffset;
    document.getElementById('steps-count').textContent = totalSteps.toLocaleString();

    // Calories: ~0.04 cal per step
    const stepCals = Math.round(totalSteps * 0.04);
    // Distance: ~0.75m per step
    const distance = (totalSteps * 0.75 / 1000).toFixed(2);
    // Active minutes: ~100 steps per minute
    const activeMin = Math.round(totalSteps / 100);

    document.getElementById('steps-calories').textContent = stepCals;
    document.getElementById('steps-distance').textContent = distance;
    document.getElementById('steps-time').textContent = activeMin;
}

function updateMealsList() {
    const container = document.getElementById('meals-list');

    if (APP.logs.food.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-utensils"></i>
                <p>No meals logged yet</p>
                <button class="btn btn-primary" onclick="switchTab('food')">Add Your First Meal</button>
            </div>`;
        return;
    }

    // Define meal types with their display info
    const mealTypes = [
        { id: 'breakfast', label: 'Breakfast', icon: 'fa-sun', color: '#f59e0b' },
        { id: 'morning-snack', label: 'Morning Snack', icon: 'fa-coffee', color: '#84cc16' },
        { id: 'lunch', label: 'Lunch', icon: 'fa-cloud-sun', color: '#3b82f6' },
        { id: 'evening-snack', label: 'Evening Snack', icon: 'fa-cookie', color: '#f97316' },
        { id: 'dinner', label: 'Dinner', icon: 'fa-moon', color: '#8b5cf6' }
    ];

    let html = '';

    mealTypes.forEach(meal => {
        const mealFoods = APP.logs.food.filter(log => log.mealType === meal.id);

        if (mealFoods.length > 0) {
            const totalCals = mealFoods.reduce((sum, f) => sum + f.calories, 0);
            const totalProtein = mealFoods.reduce((sum, f) => sum + f.protein, 0);

            html += `
                <div class="meal-section">
                    <div class="meal-section-header" style="border-left: 3px solid ${meal.color}">
                        <div class="meal-section-title">
                            <i class="fas ${meal.icon}" style="color: ${meal.color}"></i>
                            <span>${meal.label}</span>
                        </div>
                        <div class="meal-section-total">
                            <span class="meal-total-cals">${totalCals} kcal</span>
                            <span class="meal-total-protein">${totalProtein}g protein</span>
                        </div>
                    </div>
                    <div class="meal-section-items">
                        ${mealFoods.map(log => `
                            <div class="meal-item" data-log-id="${log.id}">
                                <div class="meal-info">
                                    <span class="meal-name">${log.food}</span>
                                    <span class="meal-meta">${log.quantity} ${log.unit}</span>
                                </div>
                                <div class="meal-actions">
                                    <div class="meal-calories">
                                        <span class="calories-value">${log.calories}</span>
                                        <span class="calories-unit">kcal</span>
                                    </div>
                                    <button class="delete-food-btn" onclick="deleteFood(${log.id})">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
    });

    container.innerHTML = html;
}

// Delete a logged food item
function deleteFood(logId) {
    const index = APP.logs.food.findIndex(log => log.id === logId);
    if (index > -1) {
        const foodName = APP.logs.food[index].food;
        APP.logs.food.splice(index, 1);
        saveDailyLogs();
        updateDashboard();
        showToast(`Removed ${foodName}`, 'warning');
    }
}

// Clear all meals for today
function clearAllMeals() {
    if (APP.logs.food.length === 0) {
        showToast('No meals to clear', 'warning');
        return;
    }

    if (confirm('Are you sure you want to clear all meals for today?')) {
        APP.logs.food = [];
        saveDailyLogs();
        updateDashboard();
        showToast('All meals cleared', 'warning');
    }
}

function updateExercisesList() {
    const container = document.getElementById('exercises-list');

    if (APP.logs.exercise.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-dumbbell"></i>
                <p>No exercises logged yet</p>
                <button class="btn btn-primary" onclick="switchTab('exercise')">Start Working Out</button>
            </div>`;
        return;
    }

    container.innerHTML = APP.logs.exercise.map(log => `
        <div class="exercise-item">
            <div class="exercise-icon"><i class="fas fa-dumbbell"></i></div>
            <div class="exercise-info">
                <span class="exercise-name">${log.exercise}</span>
                <span class="exercise-meta">${log.duration} min • ${log.category}</span>
            </div>
            <div class="exercise-calories">
                <span class="calories-value">-${log.caloriesBurned}</span>
                <span class="calories-unit">kcal</span>
            </div>
        </div>
    `).join('');
}

function updateWaterUI() {
    document.querySelectorAll('.glass').forEach(glass => {
        const num = parseInt(glass.dataset.glass);
        glass.classList.toggle('filled', num <= APP.logs.water);
    });
    document.getElementById('water-count').textContent = APP.logs.water;
}

function addWater() {
    if (APP.logs.water < 8) {
        APP.logs.water++;
        updateWaterUI();
        saveDailyLogs();
        showToast(`Water: ${APP.logs.water}/8 glasses`, 'success');
    } else {
        showToast('Great job! You\'ve reached your water goal!', 'success');
    }
}

// ========================================
// FOOD TRACKING
// ========================================

function populateFoodList() {
    renderFoodList(INDIAN_FOODS);
}

function renderFoodList(foods) {
    const container = document.getElementById('food-list');
    container.innerHTML = foods.map(food => `
        <div class="food-item" data-food-id="${food.id}">
            <span class="food-emoji">${FOOD_EMOJIS[food.category] || '🍽️'}</span>
            <div class="food-details">
                <span class="food-name">${food.name}</span>
                <span class="food-serving">${food.serving} ${food.unit} | P:${food.protein}g C:${food.carbs}g F:${food.fat}g</span>
            </div>
            <div class="food-cal">
                <span class="food-cal-value">${food.cal}</span>
                <span class="food-cal-unit">kcal</span>
            </div>
        </div>
    `).join('');

    // Add click listeners
    container.querySelectorAll('.food-item').forEach(item => {
        item.addEventListener('click', () => openFoodModal(item.dataset.foodId));
    });
}

function filterFoods() {
    const search = document.getElementById('food-search').value.toLowerCase();
    const category = document.querySelector('#food-categories .category-btn.active').dataset.category;

    let filtered = INDIAN_FOODS;

    if (category !== 'all') {
        filtered = filtered.filter(f => f.category === category);
    }

    if (search) {
        filtered = filtered.filter(f => f.name.toLowerCase().includes(search));
    }

    renderFoodList(filtered);
}

function openFoodModal(foodId) {
    APP.selectedFood = INDIAN_FOODS.find(f => f.id === foodId);
    if (!APP.selectedFood) return;

    // Reset to serving mode
    APP.unitMode = 'serving';
    document.querySelectorAll('.unit-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('unit-serving').classList.add('active');

    document.getElementById('modal-food-name').textContent = APP.selectedFood.name;
    document.getElementById('modal-food-calories').textContent = APP.selectedFood.cal;
    document.getElementById('modal-food-protein').textContent = APP.selectedFood.protein;
    document.getElementById('modal-food-carbs').textContent = APP.selectedFood.carbs;
    document.getElementById('modal-food-fat').textContent = APP.selectedFood.fat;
    document.getElementById('food-quantity').value = 1;

    updateUnitDisplay();
    updateFoodTotal();
    toggleModal('add-food-modal', true);
}

// Update unit display based on mode
function updateUnitDisplay() {
    if (!APP.selectedFood) return;

    const servingUnit = document.getElementById('serving-unit');
    const perServingInfo = document.getElementById('per-serving-info');
    const qtyInput = document.getElementById('food-quantity');

    if (APP.unitMode === 'grams') {
        servingUnit.textContent = 'grams';
        qtyInput.value = 100;
        qtyInput.step = 10;
        qtyInput.min = 10;
        // Calculate nutrition per gram for display
        const calPer100g = calculatePer100g(APP.selectedFood);
        perServingInfo.textContent = `1 ${APP.selectedFood.unit} = ${APP.selectedFood.serving * getGramsPerUnit(APP.selectedFood)}g approx.`;
    } else {
        servingUnit.textContent = APP.selectedFood.unit + '(s)';
        qtyInput.value = 1;
        qtyInput.step = 0.5;
        qtyInput.min = 0.5;
        perServingInfo.textContent = `Per ${APP.selectedFood.unit}: ${APP.selectedFood.cal} kcal`;
    }
}

// Estimate grams per unit for common foods
function getGramsPerUnit(food) {
    const unitWeights = {
        'piece': 50, 'slice': 30, 'cup': 150, 'bowl': 200, 'plate': 250,
        'tbsp': 15, 'glass': 200, 'medium': 120, 'g': 1, 'pieces': 50,
        'cylinder': 100, 'ball': 80
    };
    return unitWeights[food.unit] || 100;
}

// Calculate nutrition per 100g
function calculatePer100g(food) {
    const gramsPerServing = food.serving * getGramsPerUnit(food);
    const factor = 100 / gramsPerServing;
    return {
        cal: Math.round(food.cal * factor),
        protein: Math.round(food.protein * factor * 10) / 10,
        carbs: Math.round(food.carbs * factor * 10) / 10,
        fat: Math.round(food.fat * factor * 10) / 10
    };
}

function adjustQuantity(delta) {
    const input = document.getElementById('food-quantity');
    const minVal = APP.unitMode === 'grams' ? 10 : 0.5;
    const adjustDelta = APP.unitMode === 'grams' ? delta * 20 : delta;
    const newVal = Math.max(minVal, parseFloat(input.value) + adjustDelta);
    input.value = newVal;
    updateFoodTotal();
}

function updateFoodTotal() {
    if (!APP.selectedFood) return;

    const qty = parseFloat(document.getElementById('food-quantity').value) || 1;
    let calories, protein, carbs, fat;

    if (APP.unitMode === 'grams') {
        // Calculate per gram and multiply by entered grams
        const gramsPerServing = APP.selectedFood.serving * getGramsPerUnit(APP.selectedFood);
        const factor = qty / gramsPerServing;
        calories = Math.round(APP.selectedFood.cal * factor);
        protein = Math.round(APP.selectedFood.protein * factor * 10) / 10;
        carbs = Math.round(APP.selectedFood.carbs * factor * 10) / 10;
        fat = Math.round(APP.selectedFood.fat * factor * 10) / 10;
    } else {
        // Standard serving calculation
        calories = Math.round(APP.selectedFood.cal * qty);
        protein = Math.round(APP.selectedFood.protein * qty);
        carbs = Math.round(APP.selectedFood.carbs * qty);
        fat = Math.round(APP.selectedFood.fat * qty);
    }

    document.getElementById('total-calories').textContent = calories;
    document.getElementById('total-protein').textContent = protein + 'g';
    document.getElementById('total-carbs').textContent = carbs + 'g';
    document.getElementById('total-fat').textContent = fat + 'g';
}

function confirmAddFood() {
    if (!APP.selectedFood) return;

    const qty = parseFloat(document.getElementById('food-quantity').value) || 1;
    const mealType = document.querySelector('input[name="meal-type"]:checked').value;

    let calories, protein, carbs, fat, fiber, logQty, logUnit;

    if (APP.unitMode === 'grams') {
        const gramsPerServing = APP.selectedFood.serving * getGramsPerUnit(APP.selectedFood);
        const factor = qty / gramsPerServing;
        calories = Math.round(APP.selectedFood.cal * factor);
        protein = Math.round(APP.selectedFood.protein * factor);
        carbs = Math.round(APP.selectedFood.carbs * factor);
        fat = Math.round(APP.selectedFood.fat * factor);
        fiber = Math.round((APP.selectedFood.fiber || 0) * factor);
        logQty = qty;
        logUnit = 'g';
    } else {
        calories = Math.round(APP.selectedFood.cal * qty);
        protein = Math.round(APP.selectedFood.protein * qty);
        carbs = Math.round(APP.selectedFood.carbs * qty);
        fat = Math.round(APP.selectedFood.fat * qty);
        fiber = Math.round((APP.selectedFood.fiber || 0) * qty);
        logQty = qty;
        logUnit = APP.selectedFood.unit;
    }

    const log = {
        id: Date.now(),
        date: APP.today,
        food: APP.selectedFood.name,
        quantity: logQty,
        unit: logUnit,
        calories,
        protein,
        carbs,
        fat,
        fiber,
        mealType
    };

    APP.logs.food.push(log);
    saveDailyLogs();

    closeAllModals();
    showToast(`Added ${APP.selectedFood.name} to ${mealType}!`, 'success');
    updateDashboard();
    switchTab('dashboard');
}

// Add food and go back to food list to add more
function addMoreFood() {
    if (!APP.selectedFood) return;

    const qty = parseFloat(document.getElementById('food-quantity').value) || 1;
    const mealType = document.querySelector('input[name="meal-type"]:checked').value;

    let calories, protein, carbs, fat, fiber, logQty, logUnit;

    if (APP.unitMode === 'grams') {
        const gramsPerServing = APP.selectedFood.serving * getGramsPerUnit(APP.selectedFood);
        const factor = qty / gramsPerServing;
        calories = Math.round(APP.selectedFood.cal * factor);
        protein = Math.round(APP.selectedFood.protein * factor);
        carbs = Math.round(APP.selectedFood.carbs * factor);
        fat = Math.round(APP.selectedFood.fat * factor);
        fiber = Math.round((APP.selectedFood.fiber || 0) * factor);
        logQty = qty;
        logUnit = 'g';
    } else {
        calories = Math.round(APP.selectedFood.cal * qty);
        protein = Math.round(APP.selectedFood.protein * qty);
        carbs = Math.round(APP.selectedFood.carbs * qty);
        fat = Math.round(APP.selectedFood.fat * qty);
        fiber = Math.round((APP.selectedFood.fiber || 0) * qty);
        logQty = qty;
        logUnit = APP.selectedFood.unit;
    }

    const log = {
        id: Date.now(),
        date: APP.today,
        food: APP.selectedFood.name,
        quantity: logQty,
        unit: logUnit,
        calories,
        protein,
        carbs,
        fat,
        fiber,
        mealType
    };

    APP.logs.food.push(log);
    saveDailyLogs();

    closeAllModals();
    showToast(`Added ${APP.selectedFood.name}! Add more...`, 'success');
    updateDashboard();
    // Stay on food tab to add more items
    switchTab('food');
}

// ========================================
// EXERCISE TRACKING
// ========================================

function populateExerciseList() {
    renderExerciseList(EXERCISES);
}

function renderExerciseList(exercises) {
    const container = document.getElementById('exercise-list');
    container.innerHTML = exercises.map(ex => `
        <div class="exer-item" data-exercise-id="${ex.id}">
            <div class="exer-icon"><i class="fas ${EXERCISE_ICONS[ex.category] || 'fa-dumbbell'}"></i></div>
            <div class="exer-details">
                <span class="exer-name">${ex.name}</span>
                <span class="exer-meta">${ex.category} • ${ex.intensity} intensity</span>
            </div>
            <div class="exer-burn">
                <span class="exer-burn-value">${Math.round(ex.met * 60 / 60 * 30)}</span>
                <span class="exer-burn-unit">kcal/30min</span>
            </div>
        </div>
    `).join('');

    // Add click listeners
    container.querySelectorAll('.exer-item').forEach(item => {
        item.addEventListener('click', () => openExerciseModal(item.dataset.exerciseId));
    });
}

function filterExercises() {
    const search = document.getElementById('exercise-search').value.toLowerCase();
    const category = document.querySelector('#exercise-categories .category-btn.active').dataset.category;

    let filtered = EXERCISES;

    if (category !== 'all') {
        filtered = filtered.filter(e => e.category === category);
    }

    if (search) {
        filtered = filtered.filter(e => e.name.toLowerCase().includes(search));
    }

    renderExerciseList(filtered);
}

function openExerciseModal(exerciseId) {
    APP.selectedExercise = EXERCISES.find(e => e.id === exerciseId);
    if (!APP.selectedExercise) return;

    document.getElementById('modal-exercise-name').textContent = APP.selectedExercise.name;
    document.getElementById('modal-exercise-category').textContent = APP.selectedExercise.category;
    document.getElementById('exercise-duration').value = 30;

    // Set default intensity based on exercise
    const intensity = APP.selectedExercise.intensity.toLowerCase();
    const radio = document.querySelector(`input[name="intensity"][value="${intensity}"]`);
    if (radio) radio.checked = true;

    updateExerciseBurn();
    toggleModal('add-exercise-modal', true);
}

function adjustDuration(delta) {
    const input = document.getElementById('exercise-duration');
    const newVal = Math.max(5, parseInt(input.value) + delta);
    input.value = newVal;
    updateExerciseBurn();
}

function updateExerciseBurn() {
    if (!APP.selectedExercise || !APP.user) return;

    const duration = parseInt(document.getElementById('exercise-duration').value) || 30;
    const intensity = document.querySelector('input[name="intensity"]:checked').value;

    // MET-based calorie calculation
    // Calories = MET * weight(kg) * duration(hours)
    let met = APP.selectedExercise.met;
    if (intensity === 'low') met *= 0.8;
    else if (intensity === 'high') met *= 1.2;

    const calories = Math.round(met * APP.user.weight * (duration / 60));
    document.getElementById('estimated-burn').textContent = calories;
}

function confirmAddExercise() {
    if (!APP.selectedExercise || !APP.user) return;

    const duration = parseInt(document.getElementById('exercise-duration').value) || 30;
    const intensity = document.querySelector('input[name="intensity"]:checked').value;

    let met = APP.selectedExercise.met;
    if (intensity === 'low') met *= 0.8;
    else if (intensity === 'high') met *= 1.2;

    const caloriesBurned = Math.round(met * APP.user.weight * (duration / 60));

    const log = {
        id: Date.now(),
        date: APP.today,
        exercise: APP.selectedExercise.name,
        duration,
        intensity,
        caloriesBurned,
        category: APP.selectedExercise.category
    };

    APP.logs.exercise.push(log);
    saveDailyLogs();

    closeAllModals();
    showToast(`Logged ${APP.selectedExercise.name} - ${caloriesBurned} kcal burned!`, 'success');
    updateDashboard();
    switchTab('dashboard');
}

// ========================================
// STEP TRACKING
// ========================================

function updateStepsPreview() {
    const steps = parseInt(document.getElementById('manual-steps').value) || 0;

    // Calculations
    const calories = Math.round(steps * 0.04);
    const distance = (steps * 0.75 / 1000).toFixed(2);
    const activeMin = Math.round(steps / 100);

    document.getElementById('steps-preview-calories').textContent = calories;
    document.getElementById('steps-preview-distance').textContent = distance;
    document.getElementById('steps-preview-time').textContent = activeMin;
}

function confirmAddSteps() {
    const steps = parseInt(document.getElementById('manual-steps').value) || 0;
    if (steps <= 0) {
        showToast('Please enter valid step count', 'error');
        return;
    }

    const caloriesBurned = Math.round(steps * 0.04);
    const distance = (steps * 0.75 / 1000).toFixed(2);
    const activeMinutes = Math.round(steps / 100);

    const log = {
        id: Date.now(),
        date: APP.today,
        steps,
        caloriesBurned,
        distance: parseFloat(distance),
        activeMinutes
    };

    APP.logs.steps.push(log);
    saveDailyLogs();

    closeAllModals();
    document.getElementById('manual-steps').value = '';
    showToast(`Added ${steps.toLocaleString()} steps!`, 'success');
    updateDashboard();
}

// ========================================
// SUMMARY
// ========================================

function updateSummary() {
    const totals = calculateDailyTotals();
    const netCalories = totals.calories - totals.burned;

    document.getElementById('summary-net-calories').textContent = netCalories;

    // Determine status
    let status = 'On Track';
    let statusClass = '';

    if (netCalories < APP.user.dailyCalories - 200) {
        status = 'Calorie Deficit';
        if (APP.user.goal === 'loss') statusClass = 'good';
    } else if (netCalories > APP.user.dailyCalories + 200) {
        status = 'Calorie Surplus';
        if (APP.user.goal === 'gain') statusClass = 'good';
    }

    const statusEl = document.getElementById('calorie-status');
    statusEl.textContent = status;

    // Update recommendations
    updateRecommendations(totals);

    // Update meal suggestions
    updateMealSuggestions(totals);
}

function updateRecommendations(totals) {
    const recs = [];

    if (totals.protein < APP.user.proteinTarget * 0.5) {
        recs.push({ icon: 'drumstick-bite', text: 'Add more protein-rich foods like paneer, dal, or chicken.' });
    }

    if (APP.logs.water < 4) {
        recs.push({ icon: 'tint', text: 'Remember to drink more water. You\'ve had only ' + APP.logs.water + ' glasses.' });
    }

    const totalSteps = APP.logs.steps.reduce((sum, s) => sum + s.steps, 0);
    if (totalSteps < 5000) {
        recs.push({ icon: 'walking', text: 'Try to walk more today. Aim for at least 10,000 steps.' });
    }

    if (APP.logs.exercise.length === 0) {
        recs.push({ icon: 'dumbbell', text: 'No exercise logged today. Even 15 minutes helps!' });
    }

    if (recs.length === 0) {
        recs.push({ icon: 'check-circle', text: 'Great job! You\'re on track with your goals today.' });
    }

    const container = document.getElementById('recommendations-list');
    container.innerHTML = recs.map(r => `
        <div class="recommendation">
            <i class="fas fa-${r.icon}"></i>
            <span>${r.text}</span>
        </div>
    `).join('');
}

function updateMealSuggestions(totals) {
    const suggestions = [];
    const remainingCals = APP.user.dailyCalories - totals.calories;
    const remainingProtein = APP.user.proteinTarget - totals.protein;

    if (remainingProtein > 20) {
        suggestions.push({ emoji: '🍳', text: 'Egg Curry' });
        suggestions.push({ emoji: '🍗', text: 'Chicken Tikka' });
    }

    if (remainingCals > 300) {
        suggestions.push({ emoji: '🍚', text: 'Curd Rice' });
        suggestions.push({ emoji: '🥗', text: 'Sprouts Salad' });
    }

    if (remainingCals < 200 && remainingCals > 0) {
        suggestions.push({ emoji: '🍵', text: 'Green Tea' });
        suggestions.push({ emoji: '🥒', text: 'Cucumber Raita' });
    }

    const container = document.getElementById('meal-suggestions');
    if (suggestions.length > 0) {
        container.innerHTML = suggestions.slice(0, 4).map(s => `
            <div class="suggestion-item">
                <span>${s.emoji}</span>
                <small>${s.text}</small>
            </div>
        `).join('');
    } else {
        container.innerHTML = '<p style="text-align:center;color:var(--text-muted)">No suggestions for now</p>';
    }
}

// ========================================
// PROFILE
// ========================================

function updateProfileUI() {
    if (!APP.user) return;

    document.getElementById('profile-name').textContent = APP.user.name;
    document.getElementById('profile-email').textContent = APP.user.email;
    document.getElementById('profile-weight').textContent = APP.user.weight;
    document.getElementById('profile-height').textContent = APP.user.height;

    const bmi = (APP.user.weight / ((APP.user.height / 100) ** 2)).toFixed(1);
    document.getElementById('profile-bmi').textContent = bmi;

    document.getElementById('target-calories').textContent = APP.user.dailyCalories;
    document.getElementById('target-protein').textContent = APP.user.proteinTarget;
    document.getElementById('target-carbs').textContent = APP.user.carbsTarget;
    document.getElementById('target-fat').textContent = APP.user.fatTarget;

    const goalMap = { loss: 'Weight Loss', maintain: 'Maintain Weight', gain: 'Weight Gain' };
    const activityMap = { sedentary: 'Sedentary', moderate: 'Moderate', active: 'Active', heavy: 'Very Active' };

    document.getElementById('profile-goal').textContent = goalMap[APP.user.goal] || APP.user.goal;
    document.getElementById('profile-activity').textContent = activityMap[APP.user.activity] || APP.user.activity;
    document.getElementById('profile-bmr').textContent = APP.user.bmr + ' kcal';
    document.getElementById('profile-ideal-weight').textContent = `${APP.user.idealWeightMin}-${APP.user.idealWeightMax} kg`;
}

// ========================================
// UTILITIES
// ========================================

function switchTab(tabName) {
    // Update nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.tab === tabName);
    });

    // Show tab content
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.toggle('active', tab.id === `${tabName}-tab`);
    });
}

function toggleModal(modalId, show) {
    const modal = document.getElementById(modalId);
    modal.classList.toggle('active', show);
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const icons = { success: 'check-circle', error: 'times-circle', warning: 'exclamation-circle' };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fas fa-${icons[type]}"></i>
        <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => toast.remove(), 3000);
}

function saveDailyLogs() {
    const key = `fittrack_logs_${APP.today}`;
    localStorage.setItem(key, JSON.stringify(APP.logs));
}

function loadDailyLogs() {
    const key = `fittrack_logs_${APP.today}`;
    const saved = localStorage.getItem(key);
    if (saved) {
        APP.logs = JSON.parse(saved);
    } else {
        APP.logs = { food: [], exercise: [], steps: [], water: 0 };
    }
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('fittrack_user');
        APP.user = null;
        APP.currentStep = 1;
        showScreen('login-screen');
        showToast('Logged out successfully', 'success');
    }
}

function exportData() {
    const data = {
        user: APP.user,
        logs: APP.logs,
        exportedAt: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fittrack_export_${APP.today}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Data exported successfully!', 'success');
}

// ========================================
// HEALTHIFYME-LIKE FEATURES
// ========================================

// Daily Health Tips
const HEALTH_TIPS = [
    "Drink water before meals to help with portion control and stay hydrated!",
    "Try to eat slowly - it takes 20 minutes for your brain to register fullness.",
    "Include protein in every meal to stay fuller longer and build muscle.",
    "Aim for 7-8 hours of sleep to support weight management and recovery.",
    "Take a 10-minute walk after meals to aid digestion and burn calories.",
    "Replace sugary drinks with water, buttermilk, or green tea.",
    "Eat more fiber-rich foods like vegetables, fruits, and whole grains.",
    "Practice mindful eating - avoid screens while eating meals.",
    "Start your day with a protein-rich breakfast to kickstart metabolism.",
    "Add more green leafy vegetables to your diet for vitamins and minerals.",
    "Healthy fats from nuts, ghee, and coconut are essential for nutrition.",
    "Control portion sizes - use smaller plates if needed.",
    "Include probiotic foods like curd and buttermilk for gut health.",
    "Avoid eating late at night - try to finish dinner 2-3 hours before bed.",
    "Celebrate small wins - every healthy choice counts!"
];

function updateDailyTip() {
    const tipElement = document.getElementById('daily-tip');
    if (!tipElement) return;

    // Get tip based on day of year for consistency
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    const tipIndex = dayOfYear % HEALTH_TIPS.length;
    tipElement.textContent = HEALTH_TIPS[tipIndex];
}

// Meal Breakdown by Type
function updateMealBreakdown() {
    const totalCal = APP.logs.food.reduce((sum, f) => sum + f.calories, 0) || 1;

    const breakdowns = {
        breakfast: APP.logs.food.filter(f => f.mealType === 'breakfast').reduce((sum, f) => sum + f.calories, 0),
        lunch: APP.logs.food.filter(f => f.mealType === 'lunch').reduce((sum, f) => sum + f.calories, 0),
        dinner: APP.logs.food.filter(f => f.mealType === 'dinner').reduce((sum, f) => sum + f.calories, 0),
        snacks: APP.logs.food.filter(f => f.mealType === 'morning-snack' || f.mealType === 'evening-snack').reduce((sum, f) => sum + f.calories, 0)
    };

    Object.keys(breakdowns).forEach(meal => {
        const percent = (breakdowns[meal] / totalCal) * 100;
        const percentEl = document.getElementById(`${meal}-percent`);
        const calEl = document.getElementById(`${meal}-cal`);

        if (percentEl) percentEl.style.width = `${Math.min(percent, 100)}%`;
        if (calEl) calEl.textContent = `${breakdowns[meal]} kcal`;
    });
}

// Streak Counter
function updateStreak() {
    let streak = parseInt(localStorage.getItem('fittrack_streak') || '0');
    const lastLogDate = localStorage.getItem('fittrack_last_log_date');
    const today = APP.today;

    if (lastLogDate !== today && APP.logs.food.length > 0) {
        // Check if yesterday was logged
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        if (lastLogDate === yesterdayStr) {
            streak++;
        } else if (lastLogDate !== today) {
            streak = 1;
        }

        localStorage.setItem('fittrack_streak', streak.toString());
        localStorage.setItem('fittrack_last_log_date', today);
    }

    const streakEl = document.getElementById('streak-count');
    if (streakEl) streakEl.textContent = Math.max(streak, 1);
}

// Recent Foods Quick Add
function updateRecentFoods() {
    const container = document.getElementById('recent-foods-list');
    if (!container) return;

    // Get unique recent foods from today's logs
    const recentFoods = APP.logs.food.slice(-5).reverse();
    const uniqueFoods = [...new Map(recentFoods.map(f => [f.food, f])).values()].slice(0, 4);

    if (uniqueFoods.length === 0) {
        container.innerHTML = `
            <div class="empty-recent">
                <i class="fas fa-utensils"></i>
                <span>No recent foods</span>
            </div>`;
        return;
    }

    container.innerHTML = uniqueFoods.map(food => `
        <div class="recent-food-item" onclick="quickAddRecentFood('${food.food}')">
            <span class="recent-food-name">${food.food}</span>
            <span class="recent-food-cal">${food.calories} kcal</span>
            <i class="fas fa-plus"></i>
        </div>
    `).join('');
}

function quickAddRecentFood(foodName) {
    const food = INDIAN_FOODS.find(f => f.name === foodName);
    if (food) {
        openFoodModal(food.id);
    } else {
        showToast('Food not found in database', 'warning');
    }
}

// Weight Tracker
function updateWeightTracker() {
    if (!APP.user) return;

    const currentWeight = APP.user.weight;
    const startWeight = parseFloat(localStorage.getItem('fittrack_start_weight') || currentWeight);
    const goalWeight = calculateGoalWeight();

    // Store start weight if not set
    if (!localStorage.getItem('fittrack_start_weight')) {
        localStorage.setItem('fittrack_start_weight', currentWeight.toString());
    }

    const weightChange = currentWeight - startWeight;

    const currentWeightEl = document.getElementById('current-weight');
    const weightChangeEl = document.getElementById('weight-change');
    const weightGoalEl = document.getElementById('weight-goal-display');

    if (currentWeightEl) currentWeightEl.textContent = currentWeight;

    if (weightChangeEl) {
        const icon = weightChange < 0 ? 'fa-arrow-down' : (weightChange > 0 ? 'fa-arrow-up' : 'fa-minus');
        const color = (APP.user.goal === 'loss' && weightChange < 0) || (APP.user.goal === 'gain' && weightChange > 0)
            ? 'var(--success)' : 'var(--text-muted)';
        weightChangeEl.innerHTML = `
            <i class="fas ${icon}" style="color: ${color}"></i>
            <span>${weightChange > 0 ? '+' : ''}${weightChange.toFixed(1)} kg from start</span>
        `;
    }

    if (weightGoalEl) weightGoalEl.textContent = goalWeight;
}

function calculateGoalWeight() {
    if (!APP.user) return '--';

    // Calculate ideal weight based on goal
    if (APP.user.goal === 'loss') {
        return Math.round(APP.user.weight * 0.9); // 10% loss target
    } else if (APP.user.goal === 'gain') {
        return Math.round(APP.user.weight * 1.1); // 10% gain target
    }
    return APP.user.weight; // Maintain
}

// Log Weight Function
function logWeight() {
    const newWeight = prompt('Enter your current weight (kg):', APP.user?.weight || '');
    if (newWeight && !isNaN(parseFloat(newWeight))) {
        APP.user.weight = parseFloat(newWeight);
        localStorage.setItem('fittrack_user', JSON.stringify(APP.user));

        // Store weight history
        const weightHistory = JSON.parse(localStorage.getItem('fittrack_weight_history') || '[]');
        weightHistory.push({
            date: APP.today,
            weight: parseFloat(newWeight)
        });
        localStorage.setItem('fittrack_weight_history', JSON.stringify(weightHistory));

        updateDashboard();
        showToast(`Weight updated to ${newWeight} kg`, 'success');
    }
}

// Add event listener for weight button
document.getElementById('add-weight-btn')?.addEventListener('click', logWeight);

// ========================================
// HERO BANNER & MOTIVATION
// ========================================

const MOTIVATION_QUOTES = [
    "Your only limit is you!",
    "Every step counts towards your goal!",
    "Consistency beats perfection!",
    "Believe in yourself and push forward!",
    "Small progress is still progress!",
    "You're stronger than you think!",
    "Today's effort is tomorrow's result!",
    "Stay focused, stay healthy!",
    "Your body will thank you later!",
    "Making healthy choices, one meal at a time!",
    "Champions are made in the kitchen!",
    "Fuel your body, feed your soul!",
    "You've got this! 💪",
    "Health is wealth!"
];

function updateHeroBanner() {
    const hour = new Date().getHours();
    let greeting = 'Good Morning';

    if (hour >= 12 && hour < 17) {
        greeting = 'Good Afternoon';
    } else if (hour >= 17 && hour < 21) {
        greeting = 'Good Evening';
    } else if (hour >= 21 || hour < 5) {
        greeting = 'Good Night';
    }

    // Update hero greeting
    const heroGreeting = document.getElementById('greeting-text');
    const heroName = document.getElementById('user-name-greeting');
    const quoteEl = document.getElementById('motivation-quote');

    if (heroGreeting) heroGreeting.textContent = greeting;
    if (heroName && APP.user) heroName.textContent = APP.user.name || 'Champion!';

    // Random motivation quote
    if (quoteEl) {
        const randomQuote = MOTIVATION_QUOTES[Math.floor(Math.random() * MOTIVATION_QUOTES.length)];
        quoteEl.textContent = randomQuote;
    }
}

// Call on dashboard update
const originalUpdateDashboard = updateDashboard;
updateDashboard = function () {
    originalUpdateDashboard();
    updateHeroBanner();
};
