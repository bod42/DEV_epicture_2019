package com.example.my_epicture;

import android.content.Intent;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.drawerlayout.widget.DrawerLayout;

import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.navigation.NavigationView;

import androidx.appcompat.app.ActionBarDrawerToggle;

public class nav_bar extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_nav_bar);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.floatingActionButton);
       fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(nav_bar.this, home.class);
                startActivity(i);
                finish();
            }
        });

       DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
       ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
               this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
       drawer.addDrawerListener(toggle);
       toggle.syncState();
     NavigationView navigationView = (NavigationView) findViewById(R.id.nav_view);
     navigationView.setNavigationItemSelectedListener(this);
    }

   @SuppressWarnings("StatementWithEmptyBody")
    @Override
    public boolean onNavigationItemSelected(MenuItem item) {
        Intent i;
        int id = item.getItemId();

        if (id == R.id.nav_home) {
            i = new Intent(nav_bar.this, nav_bar.class);
            startActivity(i);
            finish();
        }
        return true;
    }
}
