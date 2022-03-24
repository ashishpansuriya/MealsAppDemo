class Meal {
    constructor(
        id,
        categoryIds,
        title,
        afforadbility,
        complexity,
        imageUrl,
        duration,
        ingredinets,
        steps,
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.afforadbility = afforadbility;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingredinets = ingredinets;
        this.steps = steps;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isVegetarian = isVegetarian;
        this.isLactoseFree = isLactoseFree;
    }
}

export default Meal;