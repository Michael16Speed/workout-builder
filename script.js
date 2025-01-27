document.getElementById('workoutForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const height = parseInt(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const bodyFat = parseFloat(document.getElementById('bodyFat').value);
    const trainingLevel = document.getElementById('trainingLevel').value;

    // Generate a basic workout plan based on inputs
    let workoutPlan = 'Here is your customized workout plan:\n\n';

    // Example logic for generating a workout plan
    if (trainingLevel === 'beginner') {
        workoutPlan += 'Day 1: Full Body Workout\n';
        workoutPlan += ' - Squats: 3 sets of 10 reps\n';
        workoutPlan += ' - Push-ups: 3 sets of 10 reps\n';
        workoutPlan += ' - Planks: 3 sets of 30 seconds\n';
    } else if (trainingLevel === 'intermediate') {
        workoutPlan += 'Day 1: Upper Body Workout\n';
        workoutPlan += ' - Bench Press: 4 sets of 8 reps\n';
        workoutPlan += ' - Bent Over Rows: 4 sets of 8 reps\n';
        workoutPlan += ' - Bicep Curls: 3 sets of 12 reps\n';
    } else if (trainingLevel === 'advanced') {
        workoutPlan += 'Day 1: Push Day\n';
        workoutPlan += ' - Bench Press: 5 sets of 5 reps\n';
        workoutPlan += ' - Overhead Press: 4 sets of 6 reps\n';
        workoutPlan += ' - Tricep Dips: 4 sets of 10 reps\n';
    }

    // Display the workout plan
    document.getElementById('planOutput').textContent = workoutPlan;
});
