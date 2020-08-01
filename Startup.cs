using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Models;
using My.Service.Logging;
using New_folder.UserList;


using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Authentication;
namespace New_folder
{
    
    public class Startup
    {
    //      private static void HandleMapTest1(IApplicationBuilder app)
    // {
    //     app.Run(async context =>
    //     {
    //         await context.Response.WriteAsync("Map Test 1");
    //     });
    // }

    // private static void HandleMapTest2(IApplicationBuilder app)
    // {
    //     app.Run(async context =>
    //     {
    //         await context.Response.WriteAsync("Map Test 2");
    //     });
    // }
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });

         // configure basic authentication 
            services.AddAuthentication("BasicAuthentication")
            .AddScheme<AuthenticationSchemeOptions,BasicAuthenticationHandler>("BasicAuthentication",
                                                                                   null);

            // configure DI for application services
            services.AddSingleton<IUserServise, userServise>();

            services.AddSingleton<ItodoRepository , todoRepository>();
            
           services.AddDbContextPool<Data.DataContext>(
                 options => options.UseMySql(Configuration.GetConnectionString("DefaultConnection")
              ));
                services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
        app.UseMiddleware<RequestLoggingMiddleware>();
        
       //  app.Map("/map1", HandleMapTest1);

       // app.Map("/map2", HandleMapTest2);

        // app.Run(async context =>
        // {
        //     await context.Response.WriteAsync("Hello from non-Map delegate. <p>");
        // });
        
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
           // app.UseDefaultFiles();
            app.UseStaticFiles();
            // app.UseCookiePolicy();
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            app.UseRouting();
// app.UseRequestLocalization();
    // app.UseCors();

    app.UseAuthentication();
            app.UseAuthorization();
    // app.UseSession();
    // app.UseResponseCaching();
            app.UseEndpoints(endpoints =>
            {
                 endpoints.MapControllerRoute(
                     name: "default",
                pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
