# 1	Introduction to Lesson 1


# 2	Lesson: Lecture 1
Worldwind tour of a Rails app and basic scaffolding.
- bunlder, create sandbox per gemfile/project. 
  // bundle exec rake db:migrate ->  the specific version that your project depends on
  // rake db:migrate ->  the system level version
  // gemfile.lock

- files the rails new created
  - config/dababase.yml default is sqlite3 for dev, postgram for production
  - gemfile -> project file, whate gems I need
  - gemfile.loc -> generated when run bundle install
  - **routes.rb** -> routing ![rails mvc](./rails_request_response.png)

- folder
  - app
    - asset (static asset, css,js,images,...)
    - **controller**
    - mailers -> not needed, but need a email provider
    - **models** -> 
    - **views** -> erb templates
  - bin -> where executabe sits, we never touch it
  - config
    - environments - first class in rails - override the appliation.rb
    - initializers -> be init before everything else
    - locales -> in yml files
  - boot.rb -> never touch, rails to boot itself
  - environment.rb -> 
  - db
    - migrate
  - lib 
    - asset > static asset
    - task
  - log
  - public
    - generic error pages,  static asset
    - robots.txt -> for search engine
  - test
  - tmp, cache,...
  - vendor > not really need, use bundler
  - config.ru x
  - rakefile x



# 3	Diagram: Rails Request/Response


# 4	Diagram: ActiveRecord Pattern


# 5	Diagram: 1:M Association


# 6	Diagram: M:M Association


# 7	Diagram: Entity Relationship Diagram


# 8	Assignment: Download the Project Template


# 9	Solution: System Check


# 10	Solution: Project Template


# 11	Assignment: Post model


# 12	Assignment: User model


# 13	Assignment: 1:M between User and Post


# 14	Assignment: Verify in "rails console"


# 15	Assignment: Comment model


# 16	Assignment: Comment associations


# 17	Assignment: Category model


# 18	Solution: Setting up the models


# 19	Solution: Pushing to Github


# 20	Lesson: Lecture 2


# 21	Assignment: M:M between Post and Category


# 22	Assignment: Verify with ERD Diagram


# 23	Solution: M:M Association


# 24	Assignment: Read ActiveRecord Association Methods doc


# 25	Assignment: Play with Associations


# 26	Assignment: Read Routes tutorial


# 27	Assignment: Read Layouts and Rendering


# 28	Assignment: resources :posts


# 29	Assignment: PostsController


# 30	Solution: Post resources


# 31	Assignment (optional): blog entry


# 32	Assignment (optional): change default association name


# 33	Assignment (optional): 1:M or M:M associations in the wild


# 34	Quiz: Lesson 1


# 35	Quiz: Lesson 1 Solution

