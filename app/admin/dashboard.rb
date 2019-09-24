ActiveAdmin.register_page "Dashboard" do
  menu priority: 1, label: proc { I18n.t("active_admin.dashboard") }

  content title: proc { I18n.t("active_admin.dashboard") } do
    # Here is an example of a simple dashboard with columns and panels.
    #
    columns do
      column do
        panel "Recent Posts" do
          table_for Blog.order("id desc").limit(10) do
            column("Author") {|blog| blog.author}
            column("Association") {|blog| blog.blogable}
            column("Title") {|blog| link_to(blog.title, admin_blog_path(blog))}
          end
        end
      end

      column do
        panel "Events that need approval" do
          table_for Event.where(approved:false) do
            column("Organizer") {|event| event.organizer}
            column("Association") {|event| event.eventable}
            column("Title") {|event| link_to(event.title, admin_event_path(event))}
          end
        end
      end
    end
  end # content
end
